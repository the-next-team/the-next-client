import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Alert from "./components/alert/Alert";
import Loader from "./components/loader/Loader";
import Error500Page from "./pages/error/Error500Page";
import AppRouter from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error500Page}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <div className="flex flex-col h-full">
            {/* <TitleBar /> */}
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
    </ErrorBoundary>
  );
}

export default App;
