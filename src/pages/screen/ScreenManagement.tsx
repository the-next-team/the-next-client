import Button from "../../components/button/ExampleButton";
import Table from "./components/Table";

function ScreenManagement() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex gap-2 mb-2">
          <Button text="조회" className="btn-primary btn-sm" />
          <Button text="초기화" className="btn-primary btn-sm" />
          <Button text="엑셀" className="btn-primary btn-sm" />
        </div>
      </div>

      {/* <Card> */}
      <div>
        <Table />
        <div className="flex justify-end mt-2">
          <div className="space-xy-5">
            <Button text="초기화" className="btn-primary btn-sm" />
            <Button text="등록" className="btn-primary btn-sm" disabled />
            <Button text="수정" className="btn-primary btn-sm" />
            <Button text="삭제" className="btn-primary btn-sm" />
            <Button text="보기순서변경" className="btn-primary btn-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenManagement;
