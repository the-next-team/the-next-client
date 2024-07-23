/**
 * 배치수행이력 페이지
 * 시스템 > 배치관리 > 배치수행이력
 * CMM009L
 */
import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import HeaderForm from "./components/HeaderForm";
import FooterForm from "./components/FooterForm";
import {
  batchService,
  IBatchHistory,
} from "../../../api/services/batchService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

function CMM009L() {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<IBatchHistory[]>([]);

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
        fieldName: "progId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "progName",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "procDate",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "serialNo",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "targetChk",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "count",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "days",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "param",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "status",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "progId",
        fieldName: "progId",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "프로그램ID",
      },
      {
        name: "progName",
        fieldName: "progName",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "프로그램명",
      },
      {
        name: "procDate",
        fieldName: "procDate",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "처리일",
      },
      {
        name: "serialNo",
        fieldName: "serialNo",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "일련번호",
      },
      {
        name: "targetChk",
        fieldName: "targetChk",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "대상검수",
      },
      {
        name: "count",
        fieldName: "count",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "처리건수",
      },
      {
        name: "days",
        fieldName: "days",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "처리영업일",
      },
      {
        name: "param",
        fieldName: "param",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "파라메터",
      },
      {
        name: "status",
        fieldName: "status",
        type: "data",
        styles: {
          textAlignment: "center",
        },
        header: "처리상태",
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
  }, []);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await batchService.fetchBatchInquiryHistory({
        procSt: "",
        runDt: "",
        useYn: "",
      });
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
      }
    } catch (errer) {}
  };

  return (
    <div className="overflow-x-auto">
      {/* Header */}
      <div className="flex-1 mb-2">
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>

      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden">
          {/* RealGrid */}
          <div
            className="h-[500px] min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
            ref={realgridElement}
          ></div>
        </div>
      </div>

      {/* Footer */}
      <FooterForm
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
}

export default CMM009L;
