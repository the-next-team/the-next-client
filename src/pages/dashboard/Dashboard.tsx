import PopupButton from "../../components/button/PopupButton";
import useNotification from "../../hooks/useNotification";

function Dashboard() {
  const { show } = useNotification();
  return (
    <div className="flex items-start gap-5">
      <PopupButton
        width={1600}
        height={1000}
        path={"/audit?inspNo=3384222342011"}
        children={
          <div className="p-2 rounded bg-custom-gray-100">
            <p>open popup</p>
          </div>
        }
      />

      <button
        onClick={() => {
          show({
            title: "알림",
            body: "내용",
          });
        }}
      >
        Show Nitification
      </button>
    </div>
  );
}

export default Dashboard;
