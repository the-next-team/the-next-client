import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { AgentService, IAgent } from "../../../../api/services/agentService";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";

type Props = {
  onClick: (item: IAgent) => void;
};
function Table({ onClick }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<IAgent[]>([]);
  var dp = new LocalDataProvider(true);

  useEffect(() => {
    const container = realgridElement.current;
    dp = new LocalDataProvider(true);
    const gv = new GridView(container as any);
    gv.setEditOptions({
      editable: false,
    });

    gv.setDataSource(dp);
    dp.setFields([
      {
        fieldName: "agentId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "agentNm",
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
    ]);
    gv.setColumns([
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
        name: "",
        fieldName: "",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: "중개사명약어",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "관리부점",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "접수(광고)채널",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "등록자",
      },
      {
        name: "crtDtm",
        fieldName: "crtDtm",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "등록일시",
      },
      {
        name: "acno",
        fieldName: "acno",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "계좌번호",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "혁신금융",
      },
      {
        name: "replyUrl",
        fieldName: "replyUrl",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "응답URL",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "변경자",
      },
    ]);

    gv.onCellClicked = (grid, data) => {
      if (data.itemIndex) {
      }
    };

    gv.onCellDblClicked = () => {
      console.log("onCellDblClicked");
    };

    dp.setRows(items);

    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    };
  }, [items]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await AgentService.getAgents();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
      }
    } catch (error) {}
  };

  return (
    <div
      className="h-[500px] mt-2 min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
      ref={realgridElement}
    ></div>
  );
}

export default Table;
