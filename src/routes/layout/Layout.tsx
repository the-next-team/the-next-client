import { Icon } from "@iconify/react";
import { Fragment, useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import useTabMenu from "../../hooks/useTabMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  const [tabMenu, setTabMenu] = useState<TabMenuListType>([]);

  const {
    activeTab,
    setActiveTab,
    tabMenuState,
    setTabMenuState,
    findElement,
    handleTabClose,
  } = useTabMenu();

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
    <Fragment>
      <Header />
      <main className="flex w-full h-[calc(100vh-32px)]">
        <Sidebar tabMenu={tabMenu} setTabMenu={setTabMenu} />
        <div className="w-full h-full">
          <div className="overflow-x-auto bg-white">
            <div className="flex border-r divide-x w-fit border-slate-200">
              {tabMenu.map((tab, index) => (
                <button key={index} onClick={() => setActiveTab(tab.href)}>
                  <div
                    className={`flex items-center h-full gap-2 px-4 ${
                      tab.href === activeTab
                        ? "bg-slate-100 border-b-0"
                        : "bg-transparent hover:bg-slate-100border-b border-slate-200"
                    }`}
                  >
                    <p className="whitespace-nowrap">{tab.name}</p>
                    {tab.href !== "home/dashboard" && (
                      <div
                        className="p-0.5 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTabClose(tabMenu, setTabMenu, tab.href);
                        }}
                      >
                        <Icon icon="heroicons:x-mark-16-solid" width="20px" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="p-2 m-3 bg-white rounded">
              <Breadcrumbs activeTab={activeTab} />
            </div>
            <section className="p-2 m-3 mt-0 bg-white rounded grow">
              {tabMenu.map((tab) => (
                <div
                  key={tab.href}
                  style={{
                    display: activeTab === tab.href ? "block" : "none",
                  }}
                >
                  {tab.component ? <tab.component /> : <>none</>}
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Layout;
