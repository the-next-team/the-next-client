/**
 * 객체권한그룹 페이지
 * 시스템 > 메뉴관리 > 객체권한그룹
 * CMU003U
 */
import React, { useRef } from "react";
import HeaderForm from "./components/HeaderForm";
import FooterForm from "./components/FooterForm";
import { ValueType } from "realgrid";
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
      text: "사용자명세",
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
      text: "객체권한코드",
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
    header: "객체권한명",
  },
  {
    name: "d",
    fieldName: "d",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: "사용여부",
  },
  {
    name: "e",
    fieldName: "e",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: "보기순서",
  },
  {
    name: "f",
    fieldName: "f",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: "등록자",
  },
  {
    name: "g",
    fieldName: "g",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: "등록일시",
  },
  {
    name: "h",
    fieldName: "h",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: "변경자",
  },
  {
    name: "i",
    fieldName: "i",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: "변경일시",
  },
];

function CMU003U() {
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

      {/* Footer */}
      <div>
        <FooterForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>
    </div>
  );
}

export default CMU003U;
