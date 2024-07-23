/**
 * 중개사관리 페이지
 * 시스템 > 중개사관리 > 중개사관리
 * CMC004U
 */
import Table from "./components/Table";
import HeaderForm from "./components/HeaderForm";
import FooterForm from "./components/FooterForm";

function CMC004U() {
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
          <Table onClick={() => {}} />
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

export default CMC004U;
