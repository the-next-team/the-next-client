/**
 * 모집인(LP)관리 페이지
 * 시스템 > 중개사관리 > 모집인(LP)관리
 * CMC014U
 */
import React, { useEffect, useRef, useState } from "react";
import Table from "./components/Table";
import HeaderForm from "./components/HeaderForm";
import FooterForm from "./components/FooterForm";
import { ValueType } from "realgrid";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import { ILp, LpService } from "../../../api/services/lpService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
  {
    fieldName: "agentId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "agentNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "lpTreeCd",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "lpTreeStructure",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "crtId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "lpNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "lpaCd",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "useYn",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "agentId",
    fieldName: "agentId",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "중개사ID",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "agentNm",
    fieldName: "agentNm",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "중개사명",
      showTooltip: false,
    },
  },
  {
    name: "lpTreeCd",
    fieldName: "lpTreeCd",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: "조직코드",
  },

  {
    name: "lpTreeStructure",
    fieldName: "lpTreeStructure",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "중개조직 구조",
  },
  {
    name: "crtId",
    fieldName: "crtId",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "모집인ID",
  },
  {
    name: "lpNm",
    fieldName: "lpNm",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "모집인명",
  },
  {
    name: "lpaCd",
    fieldName: "lpaCd",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "권한",
  },
  {
    name: "useYn",
    fieldName: "useYn",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "사용여부",
  },
];

function CMC014U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<ILp[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await LpService.getLp();
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

export default CMC014U;
