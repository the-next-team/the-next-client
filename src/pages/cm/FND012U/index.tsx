import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";

/**
 * 자금관리 페이지
 * 시스템 > 자금관리 > 자금관리
 * FND012U
 */
function FND012U() {
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

export default FND012U;
