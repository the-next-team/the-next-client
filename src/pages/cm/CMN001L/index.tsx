/**
 * 호스트 관리 페이지
 * 시스템 > 전문관리 > 호스트 관리
 * CMN001L
 */
import { ValueType } from "realgrid";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import { useRef } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";

const fields = [
  {
    fieldName: "id",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "name",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "word",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "mode",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "useYn",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "id",
    fieldName: "id",
    type: "data",

    header: "호스트ID",
  },
  {
    name: "name",
    fieldName: "name",
    type: "data",

    header: "호스트명",
  },
  {
    name: "word",
    fieldName: "word",
    type: "data",

    header: "약자",
  },
  {
    name: "mode",
    fieldName: "mode",
    type: "data",

    header: "조회모드",
  },
  {
    name: "useYn",
    fieldName: "useYn",
    type: "data",

    header: "사용여부",
  },
];

function CMN001L() {
  const realGridRef = useRef<RealGridHandle>(null);

  return (
    <div className="flex flex-col gap-2 relative h-full ">
      {/* Header */}
      <div>
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>

      <div className="flex-grow">
        <RealGridTable
          ref={realGridRef}
          fields={fields}
          columns={columns}
          onCellDblClicked={(grid, data) => {
            console.log("onCellDblClicked", data.itemIndex);
          }}
        />
      </div>

      {/* Footer */}
      <div>
        <FooterForm onSubmit={(data) => console.log(data)} />
      </div>
    </div>
  );
}

export default CMN001L;
