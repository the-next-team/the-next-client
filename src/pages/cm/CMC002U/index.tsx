/**
 * 팀(파트) 페이지
 * 시스템 > 사용자 > 팀(파트)
 * CMC002U
 */
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function CMC002U() {
  return (
    <div>
      <div className="flex flex-col gap-2 verflow-x-auto">
        {/* Header */}
        <div>
          <HeaderForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <Table />
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
    </div>
  );
}

export default CMC002U;
