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
        fieldName: "code",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "groupName",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "name",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "user",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "registrar",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "dataTime",
        dataType: ValueType.DATETIME,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "code",
        fieldName: "code",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "화면그룹코드",
      },
      {
        name: "groupName",
        fieldName: "groupName",
        type: "data",
        width: "240",
        styles: {
          textAlignment: "center",
        },
        header: "화면 그룹명",
      },
      {
        name: "name",
        fieldName: "name",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "프로그램 명세",
      },
      {
        name: "user",
        fieldName: "user",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "사용자 명세",
      },
      {
        name: "registrar",
        fieldName: "registrar",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "등록자",
      },
      {
        name: "dataTime",
        fieldName: "dataTime",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "등록일시",
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "사용",
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
      className="h-[500px] mt-2 min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
      ref={realgridElement}
    ></div>
  );
}

export default Table;
