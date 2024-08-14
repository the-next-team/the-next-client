import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import {
  departmentService,
  IDepartment,
} from "../../../../api/services/departmentService";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";

function Table() {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<IDepartment[]>([]);
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
        fieldName: "brCode",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "brNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "viewSeq",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "brTelno",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "brFaxno",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "crtDtm",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "brCode",
        fieldName: "brCode",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "부점코드",
          showTooltip: false,
        },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "brNm",
        fieldName: "brNm",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "부점명",
          showTooltip: false,
        },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "부점약어",
      },
      {
        name: "viewSeq",
        fieldName: "viewSeq",
        type: "data",
        width: "80",
        styles: {
          textAlignment: "center",
        },
        header: "보기순서",
      },
      {
        name: "brTelno",
        fieldName: "brTelno",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "대표번호",
      },
      {
        name: "brFaxno",
        fieldName: "brFaxno",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "팩스번호",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "180",
        styles: {
          textAlignment: "center",
        },
        header: "등록자",
      },
      {
        name: "crtDtm",
        fieldName: "crtDtm",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "등록일시",
      },
    ]);

    gv.onCellClicked = (grid, data) => {
      if (data.itemIndex) {
      }
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
      const response = await departmentService.getDepartments();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
      }
    } catch (error) {}
  };
  return (
    <div
      className="h-[500px] mt-2 min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
      ref={realgridElement}
    ></div>
  );
}

export default Table;
