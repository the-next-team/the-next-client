import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { CodeService, ICode, ICodeItem } from "../../../../../api/services/codeService";

type Props = {
  item?: ICode | null,
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

    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    };
  }, [item]);

  useEffect(() => {
    if(item) {
      findAll();
    } else {
      setItems([])
    }
  }, [item]);

  const findAll = async () => {
    try {
      const response = await CodeService.getCodeByKind(item!.kind);
      if (response.status === "OK") {
        dp.setRows(response.data);
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

export default CodeItemTable;
