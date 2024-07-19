/**
 * 팀(파트) 페이지
 * 시스템 > 사용자 > 팀(파트)
 * CMC002U
 */
import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";
import { ITeam, TeamService } from "../../../api/services/teamService";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";

function CMC002U() {
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
        fieldName: "branchCode",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "code",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "name",
        dataType: ValueType.NUMBER,
      },
      {
        fieldName: "priority",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "telephoneNumber",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "faxNumber",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "branchCode",
        fieldName: "branchCode",
        type: "data",
        width: "80",
        styles: {
          textAlignment: "center",
        },
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
        name: "branchCode",
        fieldName: "branchCode",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "부점명",
          showTooltip: false,
        },
      },
      {
        name: "code",
        fieldName: "code",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "팀(파트)코드",
      },
      {
        name: "name",
        fieldName: "name",
        type: "data",
        width: "130",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "팀(파트)명",
          showTooltip: false,
        },
        numberFormat: "0",
      },
      {
        name: "priority",
        fieldName: "priority",
        type: "data",
        width: "130",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "보기순서",
          showTooltip: false,
        },
        numberFormat: "0",
      },
      {
        name: "telephoneNumber",
        fieldName: "telephoneNumber",
        type: "data",
        width: "300",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "대표번호",
          showTooltip: false,
        },
      },
      {
        name: "faxNumber",
        fieldName: "faxNumber",
        type: "data",
        width: "300",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "팩스번호",
          showTooltip: false,
        },
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: "80",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "사용여부",
          showTooltip: false,
        },
      },
    ]);

    gv.onCellClicked = () => {
      console.log("onCellClicked");
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
      const response = await TeamService.getTeam();
      if (response.status === ApiResponseStats.OK) {
        setTeamList(response.data);
        dp.setRows(response.data);
      }
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex flex-col gap-2 verflow-x-auto">
        {/* Header */}
        <div>
          <HeaderForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            {/* RealGrid */}
            <div
              className="h-[500px] min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
              ref={realgridElement}
            ></div>
          </div>
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
    </div>
  );
}

export default CMC002U;
