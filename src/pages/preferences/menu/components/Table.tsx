import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { IMenu1Depth, MenuService } from "../../../../api/services/menuService";

type Props = {
  onClick: (item: IMenu1Depth) => void;
};

function Table({ onClick }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<IMenu1Depth[]>([]); // 대분류

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
        width: "80",
        styles: {
          textAlignment: "center",
        },
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
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "코드명",
          showTooltip: false,
        },
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
        name: "",
        fieldName: "",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "주요코드",
      },
      {
        name: "",
        fieldName: "",
        type: "data",
        width: "220",
        styles: {
          textAlignment: "center",
        },
        header: "코드셋",
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
        onClick(items[data.itemIndex]);
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
      const response = await MenuService.getMenu();
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
