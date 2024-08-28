import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";
import {
  CodeService,
  ICode,
  ICodeItem,
} from "../../../../api/services/codeService";

type Props = {
  item?: ICode | null;
  onClick: (item: ICodeItem) => void;
};

function CodeItemTable({ item, onClick }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  var dp = new LocalDataProvider(true);
  const [items, setItems] = useState<ICodeItem[]>([]); // 대분류

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
        fieldName: "code",
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
        fieldName: "updatedDate",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "priority",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "createdDate",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "code",
        fieldName: "code",
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
        name: "priority",
        fieldName: "priority",
        type: "data",
        width: 80,
        header: { text: "보기순서" },
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: 80,
        header: { text: "사용여부" },
      },
      {
        name: "updatedDate",
        fieldName: "updatedDate",
        type: "data",
        width: 220,
        header: { text: "등록일" },
      },
      {
        name: "createdDate",
        fieldName: "createdDate",
        type: "data",
        width: 220,
        header: { text: "변경일" },
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
    if (item) {
      findAll();
    } else {
      setItems([]);
    }
  }, [item]);

  const findAll = async () => {
    try {
      const response = await CodeService.getCodeByKind(item!.kind);
      if (response.status === ApiResponseStats.OK) {
        dp.setRows(response.data);
        setItems(response.data);
      }
    } catch (errer) {}
  };

  return <div className="w-full h-full" ref={realgridElement}></div>;
}

export default CodeItemTable;
