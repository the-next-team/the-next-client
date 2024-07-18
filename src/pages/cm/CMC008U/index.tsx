/**
 * 직업/직군코드
 * 시스템 > 코드관리 > 직업/직군코드
 * CMC008U
 */
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";

function CMC008U() {
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

        {/* Body */}
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

export default CMC008U;
