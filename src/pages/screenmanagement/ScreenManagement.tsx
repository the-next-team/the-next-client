// import Card from "../../components/card/Card";

export const tableData = [
  {
    순번: 1,
    시스템명: "업무지원",
    메뉴명: "고객관리",
    프로그램ID: "BCM306U",
    프로그램명: "본인인증내역",
    보기순서: 1,
    DB로그: "Y",
    사용: "Y",
    종류: "M",
    도움말: "",
    그룹별화면설정: "",
  },
  {
    순번: 2,
    시스템명: "업무지원",
    메뉴명: "사후관리",
    프로그램ID: "BCM930L",
    프로그램명: "민원내역",
    보기순서: 1,
    DB로그: "Y",
    사용: "Y",
    종류: "M",
    도움말: "",
    그룹별화면설정: "",
  },
  {
    순번: 3,
    시스템명: "업무지원",
    메뉴명: "QUPID",
    프로그램ID: "QPD001L",
    프로그램명: "QUPID서식 정보설정",
    보기순서: 1,
    DB로그: "Y",
    사용: "Y",
    종류: "M",
    도움말: "",
    그룹별화면설정: "",
  },
];

const columns = [
  {
    label: "순번",
  },
  {
    label: "시스템명",
  },
  {
    label: "메뉴명",
  },
  {
    label: "프로그렘ID",
  },
  {
    label: "프로그램명",
  },
  {
    label: "보기순서",
  },
  {
    label: "DB로그",
  },
  {
    label: "사용",
  },
  {
    label: "종류",
  },
  {
    label: "도움말",
  },
  {
    label: "그룹별화면설정",
  },
];

const rows = tableData.slice(0, 7);

function ScreenManagement() {
  return (
    <div>
      {/* <Card> */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700">
              <thead className="bg-slate-200 dark:bg-slate-700">
                <tr>
                  {columns.map((column, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="text-center table-th text-[14px]"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-center bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <td className="table-td">{row.순번}</td>
                    <td className="table-td">{row.시스템명}</td>
                    <td className="table-td">{row.메뉴명}</td>
                    <td className="table-td">{row.프로그램ID}</td>
                    <td className="table-td">{row.프로그램명}</td>
                    <td className="table-td">{row.보기순서}</td>
                    <td className="table-td">{row.DB로그}</td>
                    <td className="table-td">{row.사용}</td>
                    <td className="table-td">{row.종류}</td>
                    <td className="table-td">{row.도움말}</td>
                    <td className="table-td">{row.그룹별화면설정}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </Card> */}
    </div>
  );
}

export default ScreenManagement;
