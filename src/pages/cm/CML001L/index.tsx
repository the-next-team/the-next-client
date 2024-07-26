/**
 * 로그인 이력 페이지
 * 시스템 > 로그조회 > 로그인 이력
 * CML001L
 */
import { ValueType } from "realgrid";
import HeaderForm from "./components/HeaderForm";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import {
  ILoginhistory,
  LoginhistoryService,
} from "../../../api/services/loginhistoryService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
  {
    fieldName: "userId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "crtDtm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "succYn",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "logTy",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "loginIp",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "logoutDtm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "note",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "hostNm",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "userId",
    fieldName: "userId",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "사용자ID",
  },
  {
    name: "crtDtm",
    fieldName: "crtDtm",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "로그인일시",
  },
  {
    name: "succYn",
    fieldName: "succYn",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "성공여부",
  },
  {
    name: "logTy",
    fieldName: "logTy",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "로그타입",
  },
  {
    name: "loginIp",
    fieldName: "loginIp",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "LOGIN IP",
  },
  {
    name: "logoutDtm",
    fieldName: "logoutDtm",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "로그아웃일시",
  },
  {
    name: "note",
    fieldName: "note",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "비고",
  },
  {
    name: "hostNm",
    fieldName: "hostNm",
    type: "data",
    styles: {
      textAlignment: "center",
    },
    header: "Host",
  },
];

function CML001L() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<ILoginhistory[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await LoginhistoryService.getLoginhistory();
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

      {/* RealGrid */}
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

export default CML001L;
