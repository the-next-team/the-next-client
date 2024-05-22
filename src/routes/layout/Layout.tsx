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
    <div className="w-full h-screen">
      <Header />
      <main className="flex w-full h-[calc(100vh-32px)] grow">
        <Sidebar tabMenu={tabMenu} setTabMenu={setTabMenu} />
        <div className="w-full h-full">
          <TabMenu tabMenu={tabMenu} setTabMenu={setTabMenu} />
          <div className="max-h-[calc(100vh-64px)] overflow-y-auto">
            {tabMenu.map((tab) => (
              <div
                key={tab.href}
                style={{
                  display: activeTab === tab.href ? "block" : "none",
                }}
              >
                {tab.component ? (
                  <section className="p-3">
                    <Breadcrumbs activeTab={activeTab} />
                    <div className="bg-white rounded-[10px] p-3">
                      <tab.component />
                    </div>
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
