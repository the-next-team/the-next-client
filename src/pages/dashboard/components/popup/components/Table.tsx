import React, { useRef } from "react";
import { ValueType } from "realgrid";
import RealGridTable, {
  RealGridHandle,
} from "../../../../../components/table/RealGridTable";

const fields = [
  {
    fieldName: "postcode",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "address",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "postcode",
    fieldName: "postcode",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "우편번호",
      showTooltip: false,
    },
    renderer: {
      type: "number",
      showTooltip: true,
    },
  },
  {
    name: "address",
    fieldName: "address",
    type: "data",
    width: "300",
    styles: {
      textAlignment: "left",
    },
    header: {
      text: "기본주소",
      showTooltip: false,
    },
  },
];

function Table() {
  const realGridRef = useRef<RealGridHandle>(null);

  return (
    <div className="flex flex-col gap-2 relative h-full">
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

export default Table;
