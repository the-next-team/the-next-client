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
  GridCellType,
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
    gridView.displayOptions.useFocusClass = true;

    var toggle = false;
    function setContextMenu(grid: any) {
      grid.onContextMenuItemClicked = function (
        grid: any,
        item: any,
        clickData: any
      ) {
        if (item.tag === "excel") {
          exportExcel();
        } else if (item.tag === "filter" && clickData.column) {
          createColumnFilter(grid, clickData.column);
        } else if (item.tag === "visibleTrue") {
          const columns = grid.getColumns();

          for (var i in columns) {
            grid.setColumnProperty(columns[i].name, "visible", true);
          }
          toggle = false;
          setHeaderCellContextMenu(grid, toggle);
        } else if (item.tag === "visibleFalse") {
          grid.setColumnProperty(clickData.column, "visible", false);

          toggle = true;
          setHeaderCellContextMenu(grid, toggle);
        } else if (item.tag === "fixedCol") {
          const count = grid.layoutByColumn(clickData.column).root.vindex + 1;
          grid.setFixedOptions({ colCount: count });
        } else if (item.tag === "fixedRow") {
          const count = clickData.itemIndex + 1;
          grid.setFixedOptions({ rowCount: count });
        } else if (item.tag === "fixedCancel") {
          grid.setFixedOptions({ colCount: 0, rowCount: 0 });
        }
      };

      grid.onContextMenuPopup = function (
        grid: GridBase,
        x: any,
        y: any,
        elementName: any
      ) {
        if (elementName.cellType === GridCellType.HEADER) {
          setHeaderCellContextMenu(grid, toggle);
        } else if (elementName.cellType === GridCellType.DATA) {
          setDataCellContextMenu(grid);
        } else {
          return false;
        }
      };

      setDataCellContextMenu(grid);
    }

    function createColumnFilter(grid: GridBase, colName: string) {
      var fieldName = grid.getColumnProperty(colName, "fieldName");
      var distinctValues = dataProvider.getDistinctValues(fieldName);
      var filters = [];

      for (var i = 0; i < distinctValues.length; i++) {
        filters.push({
          name: distinctValues[i],
          criteria: `value = ${distinctValues[i]}`,
        });
      }

      grid.setColumnFilters(colName, filters);
    }

    setContextMenu(gridView);

    return () => {
      dataProvider.clearRows();
      gridView.destroy();
      dataProvider.destroy();
    };
  }, [fields, columns, onCellClicked, onCellDblClicked]);

  function setDataCellContextMenu(grid: GridBase) {
    var contextMenu = [
      {
        label: "엑셀 내보내기",
        tag: "excel",
      },
      {
        label: "-",
      },
      {
        label: "열 고정",
        tag: "fixedCol",
      },
      {
        label: "행 고정",
        tag: "fixedRow",
      },
      {
        label: "고정 취소",
        tag: "fixedCancel",
      },
    ];

    grid.setContextMenu(contextMenu);
  }

  function setHeaderCellContextMenu(grid: GridBase, val: boolean) {
    var contextMenu = [
      {
        label: "엑셀 내보내기",
        tag: "excel",
      },
      {
        label: "필터 만들기",
        tag: "filter",
      },
      {
        label: "-",
      },
      {
        label: "컬럼 숨기기",
        tag: "visibleFalse",
      },
      {
        label: "컬럼 모두 보이기",
        tag: "visibleTrue",
        enabled: val,
      },
    ];

    grid.setContextMenu(contextMenu);
  }

  const exportExcel = () => {
    window.JSZip = window.JSZip || JSZip;
    gridViewRef.current?.exportGrid({
      type: "excel",
      target: "local",
      // fileName: "gridExportSample.xlsx",
    });
  };

  // 외부에서 사용하는 함수 정의
  useImperativeHandle(ref, () => ({
    getGridView: () => gridViewRef.current,
    getDataProvider: () => dataProviderRef.current,
    setRows: (newRows: any[]) => {
      dataProviderRef.current?.setRows(newRows);
    },
    excelExport: () => {
      exportExcel();
    },
  }));

  return (
    <div className="w-full h-full" ref={realgridElement}></div>
  );
}

export default forwardRef(RealGridTable);
