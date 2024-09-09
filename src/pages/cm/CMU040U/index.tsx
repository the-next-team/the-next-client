/**
 * 이기종사번관리 페이지
 * 시스템 > 사용자관리 > 이기종사번관리
 * CMU040U
 */
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import { ValueType } from "realgrid";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";
import { FsbService, IFsb } from "../../../api/services/fsbService";

const fields = [
  {
    fieldName: "fsbEmpNo",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "fsbEmpNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "brNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "fsbNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "fsbCd",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "fsbTeamCode",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "pwChgDtm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "pwExprDtm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "loginErrCnt",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "fsbEmpNo",
    fieldName: "fsbEmpNo",
    type: "data",
    width: "150",

    header: "이기종사번",
  },
  {
    name: "fsbEmpNm",
    fieldName: "fsbEmpNm",
    type: "data",
    width: "150",

    header: "이기종사용자명",
  },
  {
    name: "brNm",
    fieldName: "brNm",
    type: "data",
    width: "120",

    header: "부서",
  },
  {
    name: "fsbNm",
    fieldName: "fsbNm",
    type: "data",
    width: "120",

    header: "용도",
  },
  {
    name: "fsbCd",
    fieldName: "fsbCd",
    type: "data",
    width: "120",

    header: "이기종 지점코드",
  },
  {
    name: "fsbTeamCode",
    fieldName: "fsbTeamCode",
    type: "data",
    width: "120",

    header: "이기종 팀코드",
  },
  {
    name: "pwChgDtm",
    fieldName: "pwChgDtm",
    type: "data",
    width: "220",

    header: "비밀번호변경일",
  },
  {
    name: "pwExprDtm",
    fieldName: "pwExprDtm",
    type: "data",
    width: "220",

    header: "비밀번호만료일",
  },
  {
    name: "loginErrCnt",
    fieldName: "loginErrCnt",
    type: "data",
    width: "120",

    header: "비밀번호오류횟수",
  },
];

function CMU040U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IFsb[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await FsbService.getFsb();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-col gap-2 relative h-full">
      {/* Header */}
      <HeaderForm
        onSubmit={(data) => {
          console.log(data);
        }}
        onExcelClick={() => {
          realGridRef.current?.excelExport();
        }}
      />

      {/* Table */}
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
  );
}

export default CMU040U;
