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
        fieldName: "agentId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "agentNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "lpTreeCd",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "lpTreeStructure",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "crtId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "lpNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "lpaCd",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "agentId",
        fieldName: "agentId",
        type: "data",
        width: 150,
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
        width: 150,
        header: {
          text: "중개사명",
          showTooltip: false,
        },
      },
      {
        name: "lpTreeCd",
        fieldName: "lpTreeCd",
        type: "data",
        width: 150,
        header: { text: "조직코드" },
      },

      {
        name: "lpTreeStructure",
        fieldName: "lpTreeStructure",
        type: "data",
        width: 180,
        header: { text: "중개조직 구조" },
      },
      {
        name: "crtId",
        fieldName: "crtId",
        type: "data",
        width: 120,
        header: { text: "모집인ID" },
      },
      {
        name: "lpNm",
        fieldName: "lpNm",
        type: "data",
        width: 120,
        header: { text: "모집인명" },
      },
      {
        name: "lpaCd",
        fieldName: "lpaCd",
        type: "data",
        width: 180,
        header: { text: "권한" },
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: 180,
        header: { text: "사용여부" },
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
