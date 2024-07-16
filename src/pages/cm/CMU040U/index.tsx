/**
 * 이기종사번관리 페이지
 * 시스템 > 사용자관리 > 이기종사번관리
 * CMU040U
 */
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function CMU040U() {
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
        </div>

        {/* Table */}
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
  );
}

export default CMU040U;
