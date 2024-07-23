/**
 * 배치수행이력 페이지
 * 시스템 > 배치관리 > 배치수행이력
 * CMM009L
 */
import HeaderForm from "./components/HeaderForm";
import FooterForm from "./components/FooterForm";
import Table from "./components/Table";

function CMM009L() {
  return (
    <div className="overflow-x-auto">
      {/* Header */}
      <div className="flex-1 mb-2">
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>

      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden">
          {/* RealGrid */}
          <Table />
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

export default CMM009L;
