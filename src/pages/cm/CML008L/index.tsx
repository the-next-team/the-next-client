/**
 * 출력물 이력 페이지
 * 시스템 > 로그조회 > 출력물 이력
 * CML008L
 */
import { ValueType } from "realgrid";
import HeaderForm from "./components/HeaderForm";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import { IPrint, PrintService } from "../../../api/services/printService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
  {
    fieldName: "prtId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "prtDtm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "brCode",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "prtUserNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "prtNm",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "prtId",
    fieldName: "prtId",
    type: "data",

    header: "출력자ID",
  },
  {
    name: "brCode",
    fieldName: "department",
    type: "data",

    header: "출력자 부서",
  },
  {
    name: "prtUserNm",
    fieldName: "prtUserNm",
    type: "data",

    header: "출력자명",
  },
  {
    name: "prtDtm",
    fieldName: "prtDtm",
    type: "data",

    header: "출력일시",
  },
  {
    name: "prtNm",
    fieldName: "prtNm",
    type: "data",

    header: "출력물",
  },
];

function CML008L() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IPrint[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await PrintService.getPrint();
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

export default CML008L;
