import { IMessage } from "@stomp/stompjs";
import { useCallback, useEffect } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LocalNotification from "../components/notification/LocalNotification";
import Sidebar from "../components/sidebar/Sidebar";
import TabMenu from "../components/tabMenu/TabMenu";
import useLocalNotification from "../hooks/useLocalNotification";
import useStompClient from "../hooks/useStompClient";
import useTabMenu from "../hooks/useTabMenu";
import Error404Page from "../pages/error/Error404Page";
import TabMenuUtil from "../utils/tabMenuUtil";

function Layout() {
  const { tabMenu, setTabMenu, activeTab } = useTabMenu();
  const { client, isConnected } = useStompClient();
  const { notifications, showNotification } = useLocalNotification();

  const handleMessage = useCallback(
    (message: IMessage) => {
      console.log(message);
      const {
        type,
        data: { title, body },
      } = JSON.parse(message.body);
      showNotification({ title, body: body });
    },
    [showNotification]
  );

  useEffect(() => {
    if (isConnected && client) {
      const subscription = client.subscribe(
        "/topic/notification",
        handleMessage
      );
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [isConnected, client, handleMessage]);

  useEffect(() => {
    setTabMenu(
      tabMenu.map(({ name, href }) => ({
        name,
        href,
        component: TabMenuUtil.findElement(href),
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
          <div className="flex flex-col flex-grow overflow-y-auto bg-gray-100">
            {tabMenu.map((tab) => (
              <div
                key={tab.href}
                className="flex flex-col h-full"
                style={{
                  display: activeTab === tab.href ? "block" : "none",
                }}
              >
                {tab?.component ? (
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

      <LocalNotification notifications={notifications} />
    </div>
  );
}

export default Layout;
