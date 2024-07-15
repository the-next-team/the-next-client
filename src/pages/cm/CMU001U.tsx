import FooterForm from "./components/userComponents/FooterForm";
import HeaderForm from "./components/userComponents/HeaderForm";
import TableConfig from "./components/userComponents/TableConfig";

function User() {
  return (
    <div>
      <div className="flex flex-col gap-2 overflow-x-auto ">
        {/* Header */}
        <div>
          <HeaderForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        {/* <Card> */}
        <div>
          <TableConfig />
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
  );
}

export default User;
