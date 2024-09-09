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
        name: "name",
        fieldName: "name",
        type: "data",
        width: 150,
        header: {
          text: "중개사명",
          showTooltip: false,
        },
      },
      {
        name: "number",
        fieldName: "number",
        type: "data",
        width: 150,
        header: { text: "조직코드" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 120,
        header: { text: "조직명" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 180,
        header: { text: "중개조직 구조" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 120,
        header: { text: "보기순서" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 120,
        header: { text: "사용여부" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 180,
        header: { text: "등록자" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 180,
        header: { text: "등록일시" },
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
