import { useQuery } from "@tanstack/react-query";
import { MessageService } from "../../../api/services/messageService";

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
    <div className="w-full h-full min-w-full p-3 pt-0">
      <div className="p-2 overflow-x-auto bg-white rounded ">
        <table className="text-sm text-left border border-separate divide-y table-auto divide-slate-100 dark:divide-slate-700">
          <thead>
            <tr>
              <th>순번</th>
              <th>요청번호</th>
              <th>전문코드</th>
              <th>전문명</th>
              <th>요청아이디</th>
              <th>요청일시</th>
              <th>응답일시</th>
              <th>상태</th>
              <th>처리자</th>
              <th>조회모드</th>
              <th>호출정보</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.requestId}</td>
                  <td>{item.caller}</td>
                  <td>{item.name}</td>
                  <td>{item.requestAt}</td>
                  <td>{item.requestAt}</td>
                  <td>{item.responseAt}</td>
                  <td>{item.status}</td>
                  <td>{item.caller}</td>
                  <td>{item.inqMode}</td>
                  <td>{}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MessageListPage;
