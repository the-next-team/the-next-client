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
        fieldName: "code",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "name",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "id",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "hostName",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "param1",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "param2",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "param3",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "code",
        fieldName: "code",
        type: "data",
        header: { text: "전문코드" },
      },
      {
        name: "name",
        fieldName: "name",
        type: "data",
        header: { text: "전문명" },
      },
      {
        name: "id",
        fieldName: "id",
        type: "data",
        header: { text: "전문ID" },
      },
      {
        name: "hostName",
        fieldName: "hostName",
        type: "data",
        header: { text: "호스트명" },
      },
      {
        name: "param1",
        fieldName: "param1",
        type: "data",
        header: { text: "파라메타1" },
      },
      {
        name: "param2",
        fieldName: "param2",
        type: "data",
        header: { text: "파라메타2" },
      },
      {
        name: "param3",
        fieldName: "param3",
        type: "data",
        header: { text: "파라메타3" },
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
