import { IMessage, StompSubscription } from "@stomp/stompjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HashRouter } from "react-router-dom";
import { RecoilEnv, RecoilRoot } from "recoil";
import Alert from "./components/alert/Alert";
import Loader from "./components/loader/Loader";
import LocalNotification from "./components/notification/LocalNotification";
import useLocalNotification from "./hooks/useLocalNotification";
import useStompClient from "./hooks/useStompClient";
import Error500Page from "./pages/error/Error500Page";
import AppRouter from "./routes";

// Duplicate atom key 체크 false
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const queryClient = new QueryClient();

function App() {
  const { connect, disconnect, subscribe, isConnected, isConnecting, isError } = useStompClient();
  const { notifications, showNotification } = useLocalNotification();
  const subscriptionRef = useRef<StompSubscription | null>(null);

  useEffect(() => {
    if (!isConnected && !isConnecting && !isError) {
      connect();
    }
    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        subscriptionRef.current = null;
      }
      disconnect();
    };
  }, [connect, disconnect, isConnected, isConnecting, isError]);

  useEffect(() => {
    const handleMessage = (message: IMessage) => {
      const {
        type,
        data: { title, body },
      } = JSON.parse(message.body);
      showNotification({ title, body: body });
    };

    if (isConnected && !subscriptionRef.current) {
      subscriptionRef.current = subscribe("/topic/notification", handleMessage);
    }

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        subscriptionRef.current = null;
      }
    };
  }, [isConnected, subscribe, showNotification]);

  return (
    <ErrorBoundary FallbackComponent={Error500Page}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <div className="flex flex-col h-full">
            <div className="flex flex-col flex-grow overflow-hidden">
              <HashRouter>
                <AppRouter />
              </HashRouter>

              <Loader />
              <Alert />
            </div>
          </div>
        </RecoilRoot>
      </QueryClientProvider>
      <LocalNotification notifications={notifications} />
    </ErrorBoundary>
  );
}

export default App;
