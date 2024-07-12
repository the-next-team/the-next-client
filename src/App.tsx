import { IMessage, StompSubscription } from "@stomp/stompjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Alert from "./components/alert/Alert";
import Loader from "./components/loader/Loader";
import LocalNotification from "./components/notification/LocalNotification";
import useLocalNotification from "./hooks/useLocalNotification";
import useStompClient from "./hooks/useStompClient";
import TitleBar from "./layout/titleBar/TitleBar";
import Error500Page from "./pages/error/Error500Page";
import AppRouter from "./routes";

const queryClient = new QueryClient();

function App() {
  const { connect, disconnect, subscribe, isConnected } = useStompClient();

  const { notifications, showNotification } = useLocalNotification();

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  useEffect(() => {
    let subscription: StompSubscription | null = null;

    const handleMessage = (message: IMessage) => {
      const {
        type,
        data: { title, body },
      } = JSON.parse(message.body);
      showNotification({ title, body: body });
    };

    if (isConnected) {
      subscription = subscribe("/topic/notification", handleMessage);
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [isConnected, subscribe]);

  return (
    <ErrorBoundary FallbackComponent={Error500Page}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <div className="flex flex-col h-full">
            <TitleBar />
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
