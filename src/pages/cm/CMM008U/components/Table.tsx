import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";
import { CodeService, IJobCode } from "../../../../api/services/codeService";

function Table() {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<IJobCode[]>([]);
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
        fieldName: "progId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "progName",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "performCycle",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "viewOrder",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "preExecPlace",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "reg",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "progId",
        fieldName: "progId",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "프로그램ID",
      },
      {
        name: "progName",
        fieldName: "progName",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "프로그램명",
      },
      {
        name: "performCycle",
        fieldName: "performCycle",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "수행주기",
      },
      {
        name: "viewOrder",
        fieldName: "viewOrder",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "보기순서",
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: "80",
        styles: {
          textAlignment: "center",
        },
        header: "사용여부",
      },
      {
        name: "preExecPlace",
        fieldName: "preExecPlace",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "선수행배치",
      },
      {
        name: "reg",
        fieldName: "reg",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "등록자",
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
