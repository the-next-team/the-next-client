/**
 * 전문처리이력 페이지
 * 시스템 > 전문관리 > 전문처리이력
 * CMN003L
 */
import { useQuery } from "@tanstack/react-query";
import {
  IMessageModel,
  MessageService,
} from "../../../api/services/messageService";
import MessageListTable from "./components/MessageListTable";
import HeaderForm from "./components/HeaderForm";
import { ValueType } from "realgrid";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
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
  },
  {
    fieldName: "inqMode",
    dataType: ValueType.TEXT,
  },
];

const columns = [
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
    width: "200",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "호출정보",
      showTooltip: false,
    },
  },
];

function CMN003L() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IMessageModel[]>([]);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["messageList"],
    queryFn: () => {
      return MessageService.getMessages({
        previousDt: "",
        currentDt: "",
        hostId: "",
        msgId: "",
        crtId: "",
        reqId: "",
        status: "",
      });
    },
  });

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await MessageService.getMessages(data);
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <div className="flex flex-col gap-2 relative h-full">
      {/* Header */}
      <div>
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>

      {/* Table */}
      <div className="flex-grow">
        <RealGridTable
          ref={realGridRef}
          fields={fields}
          columns={columns}
          onCellDblClicked={(grid, data) => {
            console.log("onCellDblClicked", data.itemIndex);
          }}
        />
      </div>
    </div>
  );
}

export default CMN003L;
