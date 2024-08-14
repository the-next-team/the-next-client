/**
 * 프로그램관리 페이지
 * 시스템 > 메뉴권한 > 프로그램관리
 * CMM002U
 */
import { ValueType } from "realgrid";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";
import { IMenu, ProgramService } from "../../../api/services/programService";

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
  {
    fieldName: "j",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "a",
    fieldName: "a",
    type: "data",
    width: "100",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "시스템명",
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
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "메뉴명",
      showTooltip: false,
    },
  },
  {
    name: "c",
    fieldName: "c",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "프로그램ID",
  },
  {
    name: "d",
    fieldName: "d",
    type: "data",
    width: "200",
    styles: {
      textAlignment: "center",
    },
    header: "프로그램명",
  },
  {
    name: "e",
    fieldName: "e",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "보기순서",
  },
  {
    name: "f",
    fieldName: "f",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "DB로그",
  },
  {
    name: "g",
    fieldName: "g",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "사용",
  },
  {
    name: "h",
    fieldName: "h",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "종류",
  },
  {
    name: "i",
    fieldName: "i",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: "도움말",
  },
  {
    name: "j",
    fieldName: "j",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "그룹별화면설정",
  },
];

function CMM002U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IMenu[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await ProgramService.fetchProgramMenuInquiry({
        menuCd: "",
        sysCd: "",
        grpSeq: "",
        prgId: "",
        prgNm: "",
        prgTy: "",
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
      <HeaderForm
        onSubmit={(data) => {
          console.log(data);
        }}
        onExcelClick={() => {
          realGridRef.current?.excelExport();
        }}
      />

      {/* <Card> */}
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

export default CMM002U;
