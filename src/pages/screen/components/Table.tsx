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
        fieldName: "name",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "createdDate",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "kind",
        fieldName: "kind",
        type: "data",
        width: "100",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "시스템명",
          showTooltip: false,
        },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "name",
        fieldName: "name",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "메뉴명",
          showTooltip: false,
        },
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "프로그램ID",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "200",
        styles: {
          textAlignment: "center",
        },
        header: "프로그램명",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "보기순서",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "DB로그",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "사용",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "종류",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "도움말",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "그룹별화면설정",
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
