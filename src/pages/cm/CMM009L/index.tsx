/**
 * 배치수행이력 페이지
 * 시스템 > 배치관리 > 배치수행이력
 * CMM009L
 */
import { useEffect, useRef, useState } from "react";
import { ValueType } from "realgrid";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";
import {
  batchService,
  IBatchHistory,
} from "../../../api/services/batchService";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";

const fields = [
  {
    fieldName: "progId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "progName",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "procDate",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "serialNo",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "targetChk",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "count",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "days",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "param",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "status",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "progId",
    fieldName: "progId",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "프로그램ID",
  },
  {
    name: "progName",
    fieldName: "progName",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "프로그램명",
  },
  {
    name: "procDate",
    fieldName: "procDate",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "처리일",
  },
  {
    name: "serialNo",
    fieldName: "serialNo",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "일련번호",
  },
  {
    name: "targetChk",
    fieldName: "targetChk",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "대상검수",
  },
  {
    name: "count",
    fieldName: "count",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "처리건수",
  },
  {
    name: "days",
    fieldName: "days",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "처리영업일",
  },
  {
    name: "param",
    fieldName: "param",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "파라메터",
  },
  {
    name: "status",
    fieldName: "status",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "처리상태",
  },
];

function CMM009L() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IBatchHistory[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await batchService.fetchBatchInquiryHistory({
        procSt: "",
        runDt: "",
      });
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (errer) {}
  };

  return (
    <div className="relative flex flex-col h-full gap-2">
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
      <FooterForm
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
}

export default CMM009L;
