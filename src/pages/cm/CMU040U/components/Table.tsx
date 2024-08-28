import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { FsbService, IFsb } from "../../../../api/services/fsbService";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";

type Props = {
  onClick: (item: IFsb) => void;
};

function Table({ onClick }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<IFsb[]>([]);
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
        fieldName: "fsbEmpNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "fsbNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "brNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "fsbCd",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "loginErrCnt",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "fsbEmpNm",
        fieldName: "fsbEmpNm",
        type: "data",
        width: 150,
        header: {
          text: "이기종사번",
          showTooltip: false,
        },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "fsbNm",
        fieldName: "fsbNm",
        type: "data",
        width: 150,
        header: {
          text: "이기종사용자명",
          showTooltip: false,
        },
      },
      {
        name: "brNm",
        fieldName: "brNm",
        type: "data",
        width: 120,
        header: { text: "부서" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 120,
        header: { text: "용도" },
      },
      {
        name: "fsbCd",
        fieldName: "fsbCd",
        type: "data",
        width: 120,
        header: { text: "이기종 지점코드" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 120,
        header: { text: "이기종 팀코드" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 220,
        header: { text: "비밀번호변경일" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 220,
        header: { text: "비밀번호만료일" },
      },
      {
        name: "loginErrCnt",
        fieldName: "loginErrCnt",
        type: "data",
        width: 120,
        header: { text: "비밀번호오류횟수" },
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
      const response = await FsbService.getFsb();
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
