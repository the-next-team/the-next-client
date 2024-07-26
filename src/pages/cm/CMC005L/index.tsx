/**
 * 영업일관리 페이지
 * 시스템 > 코드관리 > 영업일관리
 * CMC005L
 */
import { ValueType } from "realgrid";
import HeaderForm from "./components/HeaderForm";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import {
  BusinessDataService,
  IBusinessData,
} from "../../../api/services/businessDataService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
  {
    fieldName: "DATE",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "BIZ_YN",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "YEAR_WEEK",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "MONTH_WEEK",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "DESCRIPTION",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "DATE",
    fieldName: "DATE",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "일자",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "BIZ_YN",
    fieldName: "BIZ_YN",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "영업일여부",
      showTooltip: false,
    },
  },
  {
    name: "YEAR_WEEK",
    fieldName: "YEAR_WEEK",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "년주차",
  },
  {
    name: "MONTH_WEEK",
    fieldName: "MONTH_WEEK",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "월주차",
  },
  {
    name: "DESCRIPTION",
    fieldName: "DESCRIPTION",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: "비고",
  },
];

function CMC005L() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IBusinessData[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await BusinessDataService.getBusinessData();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

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

      {/* Card */}
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

export default CMC005L;
