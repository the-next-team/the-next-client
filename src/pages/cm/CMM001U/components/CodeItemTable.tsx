import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";
import {
  IMiddleMenu,
  ITopMenu,
  MenuService,
} from "../../../../api/services/menuService";

type Props = {
  item?: ITopMenu | null;
  onClick: (item: IMiddleMenu) => void;
};

function CodeItemTable({ item, onClick }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  var dp = new LocalDataProvider(true);
  const [items, setItems] = useState<IMiddleMenu[]>([]); // 중분류

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
        fieldName: "sysCd",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "sysNm",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "viewSeq",
        dataType: ValueType.NUMBER,
      },
    ]);
    gv.setColumns([
      {
        name: "sysCd",
        fieldName: "sysCd",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: "화면그룹코드",
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "sysNm",
        fieldName: "sysNm",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: "메뉴명",
      },
      {
        name: "viewSeq",
        fieldName: "viewSeq",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: "보기순서",
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

    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    };
  }, [item]);

  useEffect(() => {
    findAll();
  }, [item]);

  const findAll = async () => {
    try {
      const response = await MenuService.fetchMiddleMenuInquiry({
        menuCd: item?.menuCd.toLowerCase() ?? "",
      });
      if (response.status === ApiResponseStats.OK) {
        dp.setRows(response.data);
        setItems(response.data);
      }
    } catch (errer) {}
  };

  return <div className="w-full h-full" ref={realgridElement}></div>;
}

export default CodeItemTable;
