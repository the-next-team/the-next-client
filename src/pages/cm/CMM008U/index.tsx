import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function CMM008U() {
  return (
    <div className="overflow-x-auto">
      {/* Header */}
      <div className="flex justify-end mb-2">
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>

      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden">
          {/* RealGrid */}
          <div>
            <Table />
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterForm
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
}

export default CMM008U;
