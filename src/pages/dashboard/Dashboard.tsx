import PopupButton from "../../components/button/PopupButton";

function Dashboard() {
  return (
    <div className="flex items-start gap-5">
      <PopupButton
        width={1600}
        height={1000}
        path={"/audit"}
        children={
          <div className="p-2 rounded bg-custom-gray-100">
            <p>open popup</p>
          </div>
        }
      />
    </div>
  );
}

export default Dashboard;
