/**
 * 배치등록 페이지
 * 시스템 > 배치관리 > 배치등록
 * CMM008U
 */
import { ValueType } from "realgrid";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import { batchService, IBatch } from "../../../api/services/batchService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
  {
    fieldName: "PRG_ID",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "PRG_NM",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "PROC_CYCL_DATA",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "VIEW_SEQ",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "USE_YN",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "BF_PRG_ID",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "CRT_ID",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "PRG_ID",
    fieldName: "PRG_ID",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: "프로그램ID",
  },
  {
    name: "PRG_NM",
    fieldName: "PRG_NM",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: "프로그램명",
  },
  {
    name: "PROC_CYCL_DATA",
    fieldName: "PROC_CYCL_DATA",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "수행주기",
  },
  {
    name: "VIEW_SEQ",
    fieldName: "VIEW_SEQ",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "보기순서",
  },
  {
    name: "USE_YN",
    fieldName: "USE_YN",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: "사용여부",
  },
  {
    name: "BF_PRG_ID",
    fieldName: "BF_PRG_ID",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: "선수행배치",
  },
  {
    name: "CRT_ID",
    fieldName: "CRT_ID",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "등록자",
  },
];

function CMM008U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IBatch[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await batchService.fetchBatchInquiry({
        procCycl: "",
        prgNm: "",
        useYn: "",
      });
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

export default CMM008U;
