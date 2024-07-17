/**
 * 영업일관리 페이지
 * 시스템 > 코드관리 > 영업일관리
 * CMC005L
 */
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function CMC005L() {
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

        {/* Card */}
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default CMC005L;
