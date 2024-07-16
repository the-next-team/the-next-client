/**
 * 프로그램관리 페이지
 * 시스템 > 메뉴권한 > 프로그램관리
 * CMM002U
 */
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function CMM002U() {
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

export default CMM002U;
