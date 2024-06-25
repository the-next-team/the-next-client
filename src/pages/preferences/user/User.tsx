import { useEffect, useRef } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { UserService } from "../../../api/services/userService";

function User() {
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
        fieldName: "id",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "username",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "employeeNumber",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "id",
        fieldName: "id",
        type: "data",
        width: "80",
        styles: {
          textAlignment: "center",
        },
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
        name: "username",
        fieldName: "username",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "사용자명",
          showTooltip: false,
        },
      },
      {
        name: "employeeNumber",
        fieldName: "employeeNumber",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "사원번호",
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
      const response = await UserService.getUser();
      if (response.status === "OK") {
        dp.setRows(response.data);
      }
    } catch (error) {}
  };

  return (
    <div>
      {/* <Card> */}
      <div className="verflow-x-auto ">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <div
              className="h-[500px] min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
              ref={realgridElement}
            ></div>
          </div>
        </div>
      </div>
      {/* </Card> */}
    </div>
  );
}

export default User;
