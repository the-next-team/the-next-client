import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";
import { ITeam, TeamService } from "../../../../api/services/teamService";

type Props = {
  onClick: (item: ITeam) => void;
};

function Table({ onClick }: Props) {
  const [teamList, setTeamList] = useState<ITeam[]>([]);

  const realgridElement = useRef<HTMLDivElement | null>(null);
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
        fieldName: "brCode",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "brNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "depCode",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "depNm",
        dataType: ValueType.NUMBER,
      },
      {
        fieldName: "viewSeq",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "depTelno",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "depFaxno",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "brCode",
        fieldName: "brCode",
        type: "data",
        width: 80,
        header: {
          text: "부점코드",
          showTooltip: true,
          tooltip: '<span style="color: red;">이름</span>',
        },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "brNm",
        fieldName: "brNm",
        type: "data",
        width: 150,
        header: {
          text: "부점명",
          showTooltip: false,
        },
      },
      {
        name: "depCode",
        fieldName: "depCode",
        type: "data",
        width: 220,
        header: { text: "팀(파트)코드" },
      },
      {
        name: "depNm",
        fieldName: "depNm",
        type: "data",
        width: 130,
        header: {
          text: "팀(파트)명",
          showTooltip: false,
        },
        numberFormat: "0",
      },
      {
        name: "viewSeq",
        fieldName: "viewSeq",
        type: "data",
        width: 130,
        header: {
          text: "보기순서",
          showTooltip: false,
        },
        numberFormat: "0",
      },
      {
        name: "depTelno",
        fieldName: "depTelno",
        type: "data",
        width: 300,
        header: {
          text: "대표번호",
          showTooltip: false,
        },
      },
      {
        name: "depFaxno",
        fieldName: "depFaxno",
        type: "data",
        width: 300,
        header: {
          text: "팩스번호",
          showTooltip: false,
        },
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: 80,
        header: {
          text: "사용여부",
          showTooltip: false,
        },
      },
    ]);

    gv.onCellClicked = (grid, data) => {
      if (data.itemIndex) {
        onClick(teamList[data.itemIndex]);
      }
    };

    gv.onCellDblClicked = () => {
      console.log("onCellDblClicked");
    };

    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    };
  }, []);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await TeamService.getTeam({
        brCode: "",
      });
      if (response.status === ApiResponseStats.OK) {
        setTeamList(response.data);
        dp.setRows(response.data);
      }
    } catch (error) {}
  };
  return (
    <div
      className="h-[500px] min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
      ref={realgridElement}
    ></div>
  );
}

export default Table;
