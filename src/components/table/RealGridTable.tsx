import JSZip from "jszip";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import {
  ClickData,
  ConfigObject,
  DataFieldInput,
  GridBase,
  GridView,
  LocalDataProvider,
} from "realgrid";

type Props = {
  fields: DataFieldInput[];
  columns: (ConfigObject | string)[];
  onCellDblClicked?: (grid: GridBase, clickData: ClickData) => void;
  onCellClicked?: (grid: GridBase, clickData: ClickData) => void;
};

export type RealGridHandle = {
  getGridView: () => GridView | null;
  getDataProvider: () => LocalDataProvider | null;
  setRows: (newRows: any[]) => void;
  excelExport: () => void;
};

function RealGridTable(
  { fields, columns, onCellDblClicked, onCellClicked }: Props,
  ref: ForwardedRef<RealGridHandle>
) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const dataProviderRef = useRef<LocalDataProvider | null>(null);
  const gridViewRef = useRef<GridView | null>(null);

  useEffect(() => {
    const container = realgridElement.current;
    const dataProvider = new LocalDataProvider(true);
    const gridView = new GridView(container as any);

    gridView.setDataSource(dataProvider);
    dataProvider.setFields(fields);
    gridView.setColumns(columns);

    dataProviderRef.current = dataProvider;
    gridViewRef.current = gridView;

    gridView.onCellDblClicked = (grid, clickData) => {
      onCellDblClicked && onCellDblClicked(grid, clickData);
    };
    gridView.onCellClicked = (grid, clickData) => {
      onCellClicked && onCellClicked(grid, clickData);
    };
    gridView.setContextMenu([
      {
        label: "메뉴1",
        children: [
          {
            label: "submenu1 입니다.",
          },
          {
            label: "submenu2 입니다.",
          },
        ],
      },
      {
        label: "메뉴2",
      },
      {
        label: "-", // menu separator를 삽입합니다.
      },
      {
        label: "엑셀 내보내기",
        tag: 'ExcelExport'
      },
    ]);

    gridView.onContextMenuItemClicked = function (grid, item, clickData) {
      if (item.tag == "ExcelExport") {
        window.JSZip = window.JSZip || JSZip;
        grid.exportGrid({
          type: "excel",
          target: "local",
        });
      }
    };

    return () => {
      dataProvider.clearRows();
      gridView.destroy();
      dataProvider.destroy();
    };
  }, [fields, columns]);

  // 외부에서 사용하는 함수 정의
  useImperativeHandle(ref, () => ({
    getGridView: () => gridViewRef.current,
    getDataProvider: () => dataProviderRef.current,
    setRows: (newRows: any[]) => {
      dataProviderRef.current?.setRows(newRows);
    },
    excelExport: () => {
      window.JSZip = window.JSZip || JSZip;
      gridViewRef.current?.exportGrid({
        type: "excel",
        target: "local",
      });
    },
  }));

  return (
    <div style={{ height: "500px", width: "100%" }} ref={realgridElement}></div>
  );
}

export default forwardRef(RealGridTable);
