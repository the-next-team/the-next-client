import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";
import { CodeService, ICode } from "../../../../api/services/codeService";
import useLoading from "../../../../hooks/useLoading";

type Props = {
  onClick: (item: ICode) => void;
};

function CodeTable({ onClick }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const { showLoading, hideLoading } = useLoading();
  const [items, setItems] = useState<ICode[]>([]); // 대분류

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
        fieldName: "kind",
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
        width: 80,
        header: {
          text: "코드",
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
          text: "코드명",
          showTooltip: false,
        },
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: 80,

        header: { text: "사용여부" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 80,

        header: { text: "주요코드" },
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: 80,

        header: { text: "코드셋" },
      },
      {
        name: "createdDate",
        fieldName: "createdDate",
        type: "data",
        width: 220,

        header: { text: "생성일" },
      },
    ]);

    gv.onCellClicked = (grid, data) => {
      if (data.itemIndex) {
        onClick(items[data.itemIndex]);
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
      const response = await CodeService.getCode();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
      }
    } catch (errer) {}
  };

  return <div className="w-full h-full" ref={realgridElement}></div>;
}

export default CodeTable;
