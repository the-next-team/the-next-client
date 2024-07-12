import Button from "../../components/button/ExampleButton";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function ScreenManagement() {
  return (
    <div>
      <div className="flex flex-col gap-2 overflow-x-auto">
        {/* Header */}
        <div>
          <HeaderForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />

          {/* <Card> */}
          <div>
            <Table />
          </div>

          {/* Footer */}
          <div>
            <FooterForm
              onSubmit={(data) => {
                console.log(data);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenManagement;
