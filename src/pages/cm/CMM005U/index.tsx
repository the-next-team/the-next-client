/**
 * 화면권한그룹 페이지
 * 시스템 > 메뉴관리 > 화면권한그룹
 * CMM005U
 */
import Button from "../../../components/button/ExampleButton";
import FooterForm from "./components/FooterForm";
import Table from "./components/Table";

function CMM005U() {
  return (
    <div className="verflow-x-auto ">
      {/* Header */}
      <div className="flex justify-end">
        <div className="flex gap-2 mb-2">
          <Button text="조회" className="w-12 btn-primary btn-sm" />
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
        </div>
      </div>

      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden ">
          {/* RealGrid */}
          <div>
            <Table />
          </div>
        </div>
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
  );
}

export default CMM005U;
