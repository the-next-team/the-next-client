/**
 * 중개사관리 페이지
 * 시스템 > 중개사관리 > 중개사관리
 * CMC004U
 */
import HeaderForm from "./components/HeaderForm";
import FooterForm from "./components/FooterForm";
import { ValueType } from "realgrid";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import { AgentService, IAgent } from "../../../api/services/agentService";
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
    fieldName: "agentSnm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "brNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "invtId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "crtId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "acno",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "crtDtm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "chgDtm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "replyUrl",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "chgId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "adNm",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "agentId",
    fieldName: "agentId",
    type: "data",
    width: "150",

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

    header: {
      text: "중개사명",
      showTooltip: false,
    },
  },
  {
    name: "agentSnm",
    fieldName: "agentSnm",
    type: "data",
    width: "150",

    header: "중개사명약어",
  },
  {
    name: "brNm",
    fieldName: "brNm",
    type: "data",
    width: "120",

    header: "관리부점",
  },
  {
    name: "adNm",
    fieldName: "adNm",
    type: "data",
    width: "180",

    header: "접수(광고)채널",
  },
  {
    name: "crtId",
    fieldName: "crtId",
    type: "data",
    width: "120",

    header: "등록자",
  },
  {
    name: "crtDtm",
    fieldName: "crtDtm",
    type: "data",
    width: "180",

    header: "등록일시",
  },
  {
    name: "acno",
    fieldName: "acno",
    type: "data",
    width: "180",

    header: "계좌번호",
  },
  {
    name: "invtId",
    fieldName: "invtId",
    type: "data",
    width: "120",

    header: "혁신금융",
  },
  {
    name: "replyUrl",
    fieldName: "replyUrl",
    type: "data",
    width: "120",

    header: "응답URL",
  },
  {
    name: "chgId",
    fieldName: "chgId",
    type: "data",
    width: "120",

    header: "변경자",
  },
];

function CMC004U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IAgent[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await AgentService.getAgents();
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

export default CMC004U;
