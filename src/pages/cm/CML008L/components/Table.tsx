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
        fieldName: "id",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "department",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "name",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "datetime",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "output",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "id",
        fieldName: "id",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "출력자ID",
      },
      {
        name: "department",
        fieldName: "department",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "출력자 부서",
      },
      {
        name: "name",
        fieldName: "name",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "출력자명",
      },
      {
        name: "datetime",
        fieldName: "datetime",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "출력일시",
      },
      {
        name: "output",
        fieldName: "output",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "출력물",
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