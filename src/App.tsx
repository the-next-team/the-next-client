import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Alert from "./components/alert/Alert";
import Loader from "./components/loader/Loader";
import AppRouter from "./routes";



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="flex flex-col h-full">
          {/* <TitleBar /> */}
          <div className="flex flex-col flex-grow overflow-hidden">
            <HashRouter>
              <AppRouter />
            </HashRouter>

            <Loader />
            <Alert/>
          </div>
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
