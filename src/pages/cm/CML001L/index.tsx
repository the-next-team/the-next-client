import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

/**
 * 로그인 이력 페이지
 * 시스템 > 로그조회 > 로그인 이력
 * CML001L
 */
function CML001L() {
  return (
    <div className="overflow-x-auto">
      {/* Header */}
      <div className="flex justify-end mb-2">
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>

      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden">
          {/* RealGrid */}
          <div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CML001L;
