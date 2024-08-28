import { useEffect, useRef } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";

type Props = {
  onClick: (item: any) => void;
};

function Table({ onClick }: Props) {
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
        fieldName: "name",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "word",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "mode",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "id",
        fieldName: "id",
        type: "data",
        header: { text: "호스트ID" },
      },
      {
        name: "name",
        fieldName: "name",
        type: "data",
        header: { text: "호스트명" },
      },
      {
        name: "word",
        fieldName: "word",
        type: "data",
        header: { text: "약자" },
      },
      {
        name: "mode",
        fieldName: "mode",
        type: "data",
        header: { text: "조회모드" },
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        header: { text: "사용여부" },
      },
    ]);

    gv.onCellClicked = (grid, data) => {
      if (data.itemIndex) {
      }
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
