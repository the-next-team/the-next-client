/**
 * 사용자 페이지
 * 시스템 > 사용자 > 사용자
 * CMU001U
 */
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import TableConfig from "./components/TableConfig";

function CMU001U() {
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

        {/* <Card> */}
        <div>
          <TableConfig />
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

export default CMU001U;
