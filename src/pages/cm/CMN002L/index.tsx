/**
 * 전문관리 페이지
 * 시스템 > 전문관리 > 전문 관리
 * CMN002L
 */
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function CMN002L() {
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

        <div>
          <Table onClick={() => {}} />
        </div>

        {/* Footer */}
        <div>
          <FooterForm onSubmit={(data) => console.log(data)} />
        </div>
      </div>
    </div>
  );
}

export default CMN002L;
