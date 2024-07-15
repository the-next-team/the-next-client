import { useQuery } from "@tanstack/react-query";
import { MessageService } from "../../api/services/messageService";
import MessageListTable from "./components/MessageListTable";

function MessageListPage() {
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

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <div className="w-full h-full min-w-full">
      <div className="overflow-x-auto bg-white rounded ">
        <MessageListTable items={data?.data ?? []} />
      </div>
    </div>
  );
}

export default MessageListPage;
