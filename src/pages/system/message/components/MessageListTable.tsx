import { useEffect, useRef } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import { IMessageModel } from "../../../../api/services/messageService";
import "../../../../components/table/style/realgrid-style.css";

type Props = {
  items: IMessageModel[];
};
function MessageListTable({ items }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);

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
        fieldName: "id",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "code",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "name",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "requestId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "requestAt",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "responseAt",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "status",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "createdUserId",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "caller",
        dataType: ValueType.TEXT,
      }, {
        fieldName: "inqMode",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "id",
        fieldName: "id",
        type: "data",
        width: "80",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "순번",
          showTooltip: true,
          tooltip: '<span style="color: red;">이름</span>',
        },
        renderer: {
          type: "text",
          showTooltip: true,
        },
      },
      {
        name: "-",
        fieldName: "-",
        type: "data",
        width: "150",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "요청번호",
          showTooltip: false,
        },
      },
      {
        name: "code",
        fieldName: "code",
        type: "data",
        width: "100",
        styles: {
          textAlignment: "center",
        },
        header: "전문코드",
      },
      {
        name: "name",
        fieldName: "name",
        type: "data",
        width: "200",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "전문명",
          showTooltip: false,
        },
        numberFormat: "0",
      },
      {
        name: "requestId",
        fieldName: "requestId",
        type: "data",
        width: "130",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "요청아이디",
          showTooltip: false,
        },
        numberFormat: "0",
      },
      {
        name: "requestAt",
        fieldName: "requestAt",
        type: "data",
        width: "200",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "요청일시",
          showTooltip: false,
        },
      },
      {
        name: "responseAt",
        fieldName: "responseAt",
        type: "data",
        width: "200",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "응답일시",
          showTooltip: false,
        },
      },
      {
        name: "status",
        fieldName: "status",
        type: "data",
        width: "50",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "상태",
          showTooltip: false,
        },
      },
      {
        name: "createdUserId",
        fieldName: "createdUserId",
        type: "data",
        width: "80",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "처리자",
          showTooltip: false,
        },
      },
      {
        name: "inqMode",
        fieldName: "inqMode",
        type: "data",
        width: "50",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "조회모드",
          showTooltip: false,
        },
      },
      {
        name: "caller",
        fieldName: "caller",
        type: "data",
        width: "50",
        styles: {
          textAlignment: "center",
        },
        header: {
          text: "호출정보",
          showTooltip: false,
        },
      },
    ]);
    dp.setRows(items)

    gv.onCellClicked = () => {
      console.log("onCellClicked");
    };

    gv.onCellDblClicked = () => {
      console.log("onCellDblClicked");
    };

    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    };
  }, [items]);

  return (
    <div
      className="h-[500px] min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
      ref={realgridElement}
    ></div>
  );
}

export default MessageListTable;
