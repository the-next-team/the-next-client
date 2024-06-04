import { useEffect, useState } from "react";
// import Card from "../../components/card/Card";
import {
  IMenu1Depth,
  IMenu2Depth,
  MenuService,
} from "../../../api/services/menuService";

function MenuManagement() {
  const [selectedCode, setSelectedCode] = useState<string>(""); // 선택된 코드
  const [systemMenu, setSystemMenu] = useState<IMenu1Depth[]>([]); // 시스템 메뉴
  const [subMenu, setSubMenu] = useState<IMenu2Depth[]>([]); // 서브메뉴

  // 메뉴 조회
  useEffect(() => {
    getMenuItems();
  }, []);

  useEffect(() => {
    if (selectedCode) {
      getMenuItemByCode(selectedCode);
    }
  }, [selectedCode]);

  const getMenuItems = async () => {
    try {
      const response = await MenuService.getMenu();
      if (response.status === "OK") {
        setSystemMenu(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMenuItemByCode = async (code: string) => {
    try {
      const response = await MenuService.getMenuByCode(code);
      if (response.status === "OK") {
        setSubMenu(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {/* <Card title="시스템 메뉴" noborder> */}
      <div className="overflow-x-auto">
        <div className="min-w-full align-middle">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100 dark:divide-slate-700">
              <thead className="block bg-slate-200 dark:bg-slate-700">
                <tr>
                  <th className="w-16 text-center table-th">순번</th>
                  <th className="text-center w-28 table-th">시스템코드</th>
                  <th className="w-40 text-center table-th">시스템명</th>
                  <th className="w-20 text-center table-th">보기순서</th>
                </tr>
              </thead>
              <tbody className="block overflow-auto bg-white divide-y max-h-96 divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                {systemMenu.map((menu, i) => (
                  <tr
                    key={i}
                    className={`text-center cursor-pointer ${
                      selectedCode === menu.code
                        ? "bg-slate-100 dark:bg-slate-700"
                        : "hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                    onClick={() => setSelectedCode(menu.code)}
                  >
                    <td className="w-16 table-td">{i + 1}</td>
                    <td className="w-28 table-td">{menu.code}</td>
                    <td className="w-40 table-td">{menu.name}</td>
                    <td className="w-20 table-td">{menu.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </Card>
      <Card title="서브메뉴" noborder> */}
      <div className="">
        <div className="min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700">
              <thead className="block bg-slate-200 dark:bg-slate-700">
                <tr>
                  <th className="w-16 text-center table-th">순번</th>
                  <th className="text-center w-28 table-th">화면그룹코드</th>
                  <th className="w-40 text-center table-th">메뉴명</th>
                  <th className="w-20 text-center table-th">보기순서</th>
                </tr>
              </thead>
              <tbody className="block overflow-auto bg-white divide-y max-h-96 divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                {subMenu.map((menu, i) => (
                  <tr
                    key={i}
                    className="text-center hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <td className="w-16 table-td">{i + 1}</td>
                    <td className="w-28 table-td">-</td>
                    <td className="w-40 table-td">{menu.name}</td>
                    <td className="w-20 table-td">{menu.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </Card> */}
      <div className="flex justify-end">
        <button className="px-2 mr-2 bg-custom-blue-100">초기화</button>
        <button className="px-2 mr-2 bg-custom-blue-100">등록</button>
        <button className="px-2 mr-2 bg-custom-blue-100">수정</button>
        <button className="px-2 bg-custom-blue-100">삭제</button>
      </div>
      <div className="flex justify-end">
        <button className="px-2 mr-2 bg-custom-blue-100">초기화</button>
        <button className="px-2 mr-2 bg-custom-blue-100">등록</button>
        <button className="px-2 mr-2 bg-custom-blue-100">수정</button>
        <button className="px-2 bg-custom-blue-100">삭제</button>
      </div>
    </div>
  );
}

export default MenuManagement;
