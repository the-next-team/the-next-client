import { useEffect, useRef } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";

function Table() {
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
        fieldName: "userId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "loginDate",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "successYn",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "logType",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "loginIp",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "logout",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "note",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "host",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
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
        name: "loginDate",
        fieldName: "loginDate",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "로그인일시",
      },
      {
        name: "successYn",
        fieldName: "successYn",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "성공여부",
      },
      {
        name: "logType",
        fieldName: "logType",
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
        name: "logout",
        fieldName: "logout",
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
        name: "host",
        fieldName: "host",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "Host",
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

  return (
    <div
      className="h-[500px] min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
      ref={realgridElement}
    ></div>
  );
}

export default Table;
