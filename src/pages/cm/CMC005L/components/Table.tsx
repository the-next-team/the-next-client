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
        fieldName: "DATE",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "BIZ_YN",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "YEAR_WEEK",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "MONTH_WEEK",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "DESCRIPTION",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "DATE",
        fieldName: "DATE",
        type: "data",
        width: 150,
        header: {
          text: "일자",
          showTooltip: false,
        },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "BIZ_YN",
        fieldName: "BIZ_YN",
        type: "data",
        width: 80,
        header: {
          text: "영업일여부",
          showTooltip: false,
        },
      },
      {
        name: "YEAR_WEEK",
        fieldName: "YEAR_WEEK",
        type: "data",
        width: 120,
        header: { text: "년주차" },
      },
      {
        name: "MONTH_WEEK",
        fieldName: "MONTH_WEEK",
        type: "data",
        width: 120,
        header: { text: "월주차" },
      },
      {
        name: "DESCRIPTION",
        fieldName: "DESCRIPTION",
        type: "data",
        width: 220,
        header: { text: "비고" },
      },
    ]);

    gv.onCellClicked = (grid, data) => {};

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
