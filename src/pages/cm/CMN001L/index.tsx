/**
 * 직업/직군코드
 * 시스템 > 전문관리 > 호스트 관리
 * CMN001L
 */
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function CMN001L() {
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

export default CMN001L;
