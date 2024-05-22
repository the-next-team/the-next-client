import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import TabMenu from "../../components/tabMenu/TabMenu";
import useTabMenu from "../../hooks/useTabMenu";
import Error404Page from "../../pages/error/Error404Page";
import { TabMenuListType } from "../../states/layout/layoutAtom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  const [tabMenu, setTabMenu] = useState<TabMenuListType>([]);

  const { activeTab, tabMenuState, setTabMenuState, findElement } =
    useTabMenu();

  useEffect(() => {
    setTabMenu(
      tabMenuState.map(({ name, href }) => ({
        name,
        href,
        component: findElement(href),
      }))
    );
  }, []);

  useEffect(() => {
    if (tabMenu.length) {
      setTabMenuState(tabMenu.map(({ name, href }) => ({ name, href })));
    }
  }, [tabMenu]);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex w-full grow">
        <Sidebar tabMenu={tabMenu} setTabMenu={setTabMenu} />
        <div className="flex flex-col w-full h-full">
          <TabMenu tabMenu={tabMenu} setTabMenu={setTabMenu} />
          <div className="flex flex-col grow">
            {tabMenu.map((tab) => (
              <div
                key={tab.href}
                className="h-full"
                style={{
                  display: activeTab === tab.href ? "block" : "none",
                }}
              >
                {tab.component ? (
                  <section>
                    <div className="p-2 m-3 bg-white rounded">
                      <Breadcrumbs activeTab={activeTab} />
                    </div>
                    <tab.component />
                  </section>
                ) : (
                  <Error404Page />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
