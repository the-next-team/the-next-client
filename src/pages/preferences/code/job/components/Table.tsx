import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { CodeService, IJobCode } from "../../../../../api/services/codeService";

type Props = {
  onClick: (item: IJobCode) => void;
};

function Table({ onClick }: Props) {
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
        fieldName: "jobCode",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "jobName",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "createdDate",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "jobCode",
        fieldName: "jobCode",
        type: "data",
        width: "80",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "직업코드",
          showTooltip: false,
        },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "jobName",
        fieldName: "jobName",
        type: "data",
        width: "300",
        styles: {
          textAlignment: "left",
        },
        header: {
          text: "직업명",
          showTooltip: false,
        },
      },
      {
        name: "jobLevel1",
        fieldName: "jobLevel1",
        type: "data",
        width: "100",
        styles: {
          textAlignment: "center",
        },
        header: "직업등급1",
      },
      {
        name: "jobLevel2",
        fieldName: "jobLevel2",
        type: "data",
        width: "100",
        styles: {
          textAlignment: "center",
        },
        header: "직업등급2",
      },
      {
        name: "acctJobCode",
        fieldName: "acctJobCode",
        type: "data",
        width: "100",
        styles: {
          textAlignment: "center",
        },
        header: "계정계 직업코드",
      },
      {
        name: "createdDate",
        fieldName: "createdDate",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "생성일",
      },
    ]);

    gv.onCellClicked = (grid, data) => {
      if (data.itemIndex) {
      }
    };

    gv.onCellDblClicked = () => {
      console.log("onCellDblClicked");
    };

    dp.setRows(items)

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
      const response = await CodeService.getJobCode();
      if (response.status === "OK") {
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
