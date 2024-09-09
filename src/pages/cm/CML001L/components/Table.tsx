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
        fieldName: "crtDtm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "succYn",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "logTy",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "loginIp",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "logoutDtm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "note",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "hostNm",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "userId",
        fieldName: "userId",
        type: "data",
        header: { text: "사용자ID" },
      },
      {
        name: "crtDtm",
        fieldName: "crtDtm",
        type: "data",
        header: { text: "로그인일시" },
      },
      {
        name: "succYn",
        fieldName: "succYn",
        type: "data",
        header: { text: "성공여부" },
      },
      {
        name: "logTy",
        fieldName: "logTy",
        type: "data",
        header: { text: "로그타입" },
      },
      {
        name: "loginIp",
        fieldName: "loginIp",
        type: "data",
        header: { text: "LOGIN IP" },
      },
      {
        name: "logoutDtm",
        fieldName: "logoutDtm",
        type: "data",
        header: { text: "로그아웃일시" },
      },
      {
        name: "note",
        fieldName: "note",
        type: "data",
        header: { text: "비고" },
      },
      {
        name: "hostNm",
        fieldName: "hostNm",
        type: "data",
        header: { text: "Host" },
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
