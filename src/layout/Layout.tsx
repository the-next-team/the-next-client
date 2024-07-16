import { useEffect } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import TabMenu from "../components/tabMenu/TabMenu";
import useMenu from "../hooks/useMenu";
import useTabMenu from "../hooks/useTabMenu";
import Error404Page from "../pages/error/Error404Page";
import DynamicComponent from "./components/DynamicComponent";

function Layout() {
  const { tabMenu, setTabMenu, activeTab } = useTabMenu();
  const { fetchMenu } = useMenu();

  useEffect(() => {
    fetchMenu();

    setTabMenu(
      tabMenu.map(({ name, href }) => ({
        name,
        href,
      }))
    );
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-red-300">
      <Header />

      <main className="flex flex-grow overflow-hidden bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-grow overflow-hidden bg-gray-100">
          <TabMenu />
          <div className="flex flex-col flex-grow p-3 overflow-y-auto bg-gray-100">
            {tabMenu.map((tab) => (
              <div
                key={tab.href}
                className="flex-1"
                style={{
                  display: activeTab === tab.href ? "block" : "none",
                }}
              >
                {tab.href ? (
                  <>
                    <Breadcrumbs />
                    <div className="">
                      <DynamicComponent componentPath={tab.href} />
                    </div>
                  </>
                ) : (
                  <div className="h-full p-3 bg-white rounded">
                    <Error404Page />
                  </div>
                )}
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
