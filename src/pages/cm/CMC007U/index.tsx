/**
 * 부서(지점) 페이지
 * 시스템 > 기준관리(중앙회) > 부서(지점)
 * CMC007U
 */
import Button from "../../../components/button/Button";
import FooterForm from "./components/FooterForm";
import Table from "./components/Table";

function CMC007U() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <div className="flex gap-2">
            <Button text="조회" className="w-12 btn-primary btn-sm" />
          </div>
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

export default CMC007U;
