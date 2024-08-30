/**
 * 사용자 관리 페이지
 * 시스템 > 사용자 > 사용자 관리
 * CMU001U
 */
import { useEffect, useRef, useState } from "react";
import { ValueType } from "realgrid";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";
import {
  IUserName,
  userNameService,
} from "../../../api/services/userNameService";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Button from "../../../components/button/Button";

const fields = [
  {
    fieldName: "userId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "empNo",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "userNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "sabNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "brNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "createdDate",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "fsbEmpno",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "userId",
    fieldName: "userId",
    type: "data",
    width: "100",

    header: {
      text: "사용자ID",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "userNm",
    fieldName: "userNm",
    type: "data",
    width: "150",

    header: {
      text: "사용자명",
      showTooltip: false,
    },
  },
  {
    name: "empNo",
    fieldName: "empNo",
    type: "data",
    width: "120",

    header: "시스템사번",
  },
  {
    name: "saaNm",
    fieldName: "saaNm",
    type: "data",
    width: "120",

    header: "직급",
  },
  {
    name: "empNo",
    fieldName: "empNo",
    type: "data",
    width: "120",

    header: "사번",
  },
  {
    name: "sabNm",
    fieldName: "sabNm",
    type: "data",
    width: "120",

    header: "상태",
  },
  {
    name: "brNm",
    fieldName: "brNm",
    type: "data",
    width: "120",

    header: "부점",
  },
  {
    name: "permission",
    fieldName: "permission",
    type: "data",
    width: "120",

    header: "화면권한",
  },
  {
    name: "fsbEmpno",
    fieldName: "fsbEmpno",
    type: "data",
    width: "120",

    header: "이기종ID",
  },
];

function CMU001U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IUserName[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await userNameService.getUserName();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  return (
    <div className="relative flex flex-col h-full gap-2">
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

      {/* <Card> */}
      <div className="flex flex-grow gap-2">
        <RealGridTable
          ref={realGridRef}
          fields={fields}
          columns={columns}
          onCellClicked={(grid, data) => {
            console.log("onCellClicked", data.itemIndex);
          }}
        />
        {/* Footer */}
        <FooterForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>
    </div>
  );
}

export default CMU001U;
