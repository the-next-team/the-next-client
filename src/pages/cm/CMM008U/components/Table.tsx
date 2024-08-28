import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";
import { batchService, IBatch } from "../../../../api/services/batchService";

function Table() {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<IBatch[]>([]);

  useEffect(() => {
    const container = realgridElement.current;
    const dp = new LocalDataProvider(true);
    const gv = new GridView(container as any);
    gv.setEditOptions({
      editable: false,
    });
    gv.setDataSource(dp);
    dp.setFields([
      {
        fieldName: "PRG_ID",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "PRG_NM",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "PROC_CYCL_DATA",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "VIEW_SEQ",
        dataType: ValueType.NUMBER,
      },
      {
        fieldName: "USE_YN",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "BF_PRG_ID",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "CRT_ID",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "PRG_ID",
        fieldName: "PRG_ID",
        type: "data",
        width: 220,
        header: { text: "프로그램ID" },
      },
      {
        name: "PRG_NM",
        fieldName: "PRG_NM",
        type: "data",
        width: 220,
        header: { text: "프로그램명" },
      },
      {
        name: "PROC_CYCL_DATA",
        fieldName: "PROC_CYCL_DATA",
        type: "data",
        width: 120,
        header: { text: "수행주기" },
      },
      {
        name: "VIEW_SEQ",
        fieldName: "VIEW_SEQ",
        type: "data",
        width: 120,
        header: { text: "보기순서" },
      },
      {
        name: "USE_YN",
        fieldName: "USE_YN",
        type: "data",
        width: 80,
        header: { text: "사용여부" },
      },
      {
        name: "BF_PRG_ID",
        fieldName: "BF_PRG_ID",
        type: "data",
        width: 220,
        header: { text: "선수행배치" },
      },
      {
        name: "CRT_ID",
        fieldName: "CRT_ID",
        type: "data",
        width: 120,
        header: { text: "등록자" },
      },
    ]);
    gv.onCellClicked = () => {
      console.log("onCellClicked");
    };
    gv.onCellDblClicked = () => {
      console.log("onCellDblClicked");
    };
    dp.setRows(items);

    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    };
  }, [items]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await batchService.fetchBatchInquiry({
        procCycl: "",
        prgNm: "",
        useYn: "",
      });
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
      }
    } catch (errer) {}
  };

  return (
    <div
      className="h-[500px] min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
      ref={realgridElement}
    ></div>
  );
}

export default Table;
