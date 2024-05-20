import React, { useEffect, useState } from "react";
// import Card from "../../../components/card/Card";
import { IUser, UserService } from "../../../api/services/userService";

function User() {
  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await UserService.getUser();
      if (response.status === "OK") {
        setUserList(response.data);
      }
    } catch (error) {}
  };

  return (
    <div>
      {/* <Card> */}
      <div className="-mx-6 overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700">
              <thead className="bg-slate-200 dark:bg-slate-700">
                <tr>
                  <th className="text-center table-th text-[14px]">순번</th>
                  <th className="text-center table-th text-[14px]">사용자ID</th>
                  <th className="text-center table-th text-[14px]">사용자명</th>
                  {/* <th>시스템사번</th> */}
                  <th className="text-center table-th text-[14px]">직급</th>
                  <th className="text-center table-th text-[14px]">사원번호</th>
                  <th className="text-center table-th text-[14px]">
                    사용자상태
                  </th>
                  <th className="text-center table-th text-[14px]">팀/파트</th>
                  <th className="text-center table-th text-[14px]">이기종ID</th>
                  <th className="text-center table-th text-[14px]">
                    로그인상태
                  </th>
                  <th className="text-center table-th text-[14px]">
                    로그인제한사유
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 text-center">
                {userList.map((user, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <td className="table-td">-</td>
                    <td className="table-td">{user.id}</td>
                    <td className="table-td">{user.username}</td>
                    <td className="table-td">-</td>
                    <td className="table-td">{user.employeeNumber}</td>
                    <td className="table-td">-</td>
                    <td className="table-td">-</td>
                    <td className="table-td">-</td>
                    <td className="table-td">-</td>
                    <td className="table-td">-</td>
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

export default User;
