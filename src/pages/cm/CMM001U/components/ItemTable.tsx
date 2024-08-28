import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";
import { ITopMenu, MenuService } from "../../../../api/services/menuService";

type Props = {
  onClick: (item: ITopMenu) => void;
};

function ItemTable({ onClick }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<ITopMenu[]>([]); // 대분류

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
        fieldName: "menuCd",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "menuNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "viewSeq",
        dataType: ValueType.NUMBER,
      },
    ]);
    gv.setColumns([
      {
        name: "menuCd",
        fieldName: "menuCd",
        type: "data",
        width: 150,
        header: { text: "시스템코드" },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "menuNm",
        fieldName: "menuNm",
        type: "data",
        width: 150,
        header: { text: "시스템명" },
      },
      {
        name: "viewSeq",
        fieldName: "viewSeq",
        type: "data",
        width: 150,
        header: { text: "보기순서" },
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
      const response = await MenuService.fetchTopMenuInquiry();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
      }
    } catch (errer) {}
  };

  return <div className="w-full h-full" ref={realgridElement}></div>;
}

export default ItemTable;
