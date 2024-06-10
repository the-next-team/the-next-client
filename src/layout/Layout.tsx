import { useEffect, useState } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import TabMenu from "../components/tabMenu/TabMenu";
import useTabMenu from "../hooks/useTabMenu";
import Error404Page from "../pages/error/Error404Page";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useRecoilState } from "recoil";
import TabMenuUtil from "../utils/tabMenuUtil";
import {
  PersistedTabMenuList,
  TabMenuList,
  persistedTabMenuState,
} from "../states/layout/layoutAtom";

function Layout() {
  const [tabMenu, setTabMenu] = useState<TabMenuList>([]);
  const [persistedTabMenu, setPersistedTabMenu] =
    useRecoilState<PersistedTabMenuList>(persistedTabMenuState);
  const { activeTab } = useTabMenu();

  useEffect(() => {
    setTabMenu(
      persistedTabMenu.map(({ name, href }) => ({
        name,
        href,
        component: TabMenuUtil.findElement(href),
      }))
    );
  }, []);

  useEffect(() => {
    if (tabMenu.length) {
      setPersistedTabMenu(tabMenu.map(({ name, href }) => ({ name, href })));
    }
  }, [tabMenu]);

  return (
    <div className="flex flex-col w-full h-full bg-red-300">
      <Header />

      <main className="flex flex-grow overflow-hidden bg-gray-100">
        <Sidebar tabMenu={tabMenu} setTabMenu={setTabMenu} />
        <div className="flex flex-col flex-grow overflow-hidden bg-gray-100">
          <TabMenu tabMenu={tabMenu} setTabMenu={setTabMenu} />
          <div className="flex flex-col flex-grow overflow-y-auto bg-gray-100">
            {tabMenu.map((tab) => (
              <div
                key={tab.href}
                className="flex flex-col h-full"
                style={{
                  display: activeTab === tab.href ? "block" : "none",
                }}
              >
                {tab.component ? (
                  <section className="flex flex-col h-full p-3 grow">
                    <Breadcrumbs />
                    <div className="bg-white rounded-[10px] p-3 ">
                      <tab.component />
                    </div>
                  </section>
                ) : (
                  <Error404Page />
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
