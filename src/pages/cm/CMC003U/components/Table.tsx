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
        fieldName: "adNo",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "adNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "adSnm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "adaNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "adbNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "invtId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "chgId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "chgDtm",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "adNo",
        fieldName: "adNo",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "접수(광고)채널번호",
          showTooltip: false,
        },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "adNm",
        fieldName: "adNm",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "접수채널명",
          showTooltip: false,
        },
      },
      {
        name: "adSnm",
        fieldName: "adSnm",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "채널명(약어)",
      },
      {
        name: "adaNm",
        fieldName: "adaNm",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: "접수경로",
      },
      {
        name: "adbNm",
        fieldName: "adbNm",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "통계구분",
      },
      {
        name: "invtId",
        fieldName: "invtId",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: "권유자ID",
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "사용여부",
      },
      {
        name: "chgId",
        fieldName: "chgId",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "등록자",
      },
      {
        name: "chgDtm",
        fieldName: "chgDtm",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "등록일시",
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
