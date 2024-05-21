import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AppRouter from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <HashRouter>
          <AppRouter />
        </HashRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
