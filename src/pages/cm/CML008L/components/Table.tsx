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
        fieldName: "prtId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "prtDtm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "brCode",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "prtUserNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "prtNm",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "prtId",
        fieldName: "prtId",
        type: "data",
        header: { text: "출력자ID" },
      },
      {
        name: "brCode",
        fieldName: "department",
        type: "data",
        header: { text: "출력자 부서" },
      },
      {
        name: "prtUserNm",
        fieldName: "prtUserNm",
        type: "data",
        header: { text: "출력자명" },
      },
      {
        name: "prtDtm",
        fieldName: "prtDtm",
        type: "data",
        header: { text: "출력일시" },
      },
      {
        name: "prtNm",
        fieldName: "prtNm",
        type: "data",
        header: { text: "출력물" },
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
