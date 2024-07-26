/**
 * 중개사조직관리 페이지
 * 시스템 > 중개사관리 > 중개사조직관리
 * CMC022U
 */
import Table from "./components/Table";
import HeaderForm from "./components/HeaderForm";
import { ValueType } from "realgrid";
import { useRef } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";

const fields = [
  {
    fieldName: "a",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "b",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "c",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "d",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "e",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "f",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "g",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "h",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "i",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "a",
    fieldName: "a",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "중개사ID",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "b",
    fieldName: "b",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "중개사명",
      showTooltip: false,
    },
  },
  {
    name: "c",
    fieldName: "c",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: "조직코드",
  },
  {
    name: "d",
    fieldName: "d",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "조직명",
  },
  {
    name: "e",
    fieldName: "e",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "중개조직 구조",
  },
  {
    name: "f",
    fieldName: "f",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "보기순서",
  },
  {
    name: "g",
    fieldName: "g",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "사용여부",
  },
  {
    name: "h",
    fieldName: "h",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "등록자",
  },
  {
    name: "i",
    fieldName: "i",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "등록일시",
  },
];

function CMC022U() {
  const realGridRef = useRef<RealGridHandle>(null);

  return (
    <div className="flex flex-col gap-2 relative h-full">
      {/* Header */}
      <div>
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
          onExcelClick={() => {
            realGridRef.current?.excelExport();
          }}
        />
      </div>

      {/* Table */}
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
    </div>
  );
}

export default CMC022U;
