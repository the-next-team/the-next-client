/**
 * 전문관리 페이지
 * 시스템 > 전문관리 > 전문 관리
 * CMN002L
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
    fieldName: "code",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "name",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "id",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "hostName",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "param1",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "param2",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "param3",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "code",
    fieldName: "code",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "전문코드",
  },
  {
    name: "name",
    fieldName: "name",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "전문명",
  },
  {
    name: "id",
    fieldName: "id",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "전문ID",
  },
  {
    name: "hostName",
    fieldName: "hostName",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "호스트명",
  },
  {
    name: "param1",
    fieldName: "param1",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "파라메타1",
  },
  {
    name: "param2",
    fieldName: "param2",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "파라메타2",
  },
  {
    name: "param3",
    fieldName: "param3",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "파라메타3",
  },
];

function CMN002L() {
  const realGridRef = useRef<RealGridHandle>(null);

  return (
    <div className="flex flex-col gap-2 relative h-full">
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

export default CMN002L;
