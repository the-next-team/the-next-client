import { useState } from "react";
// import Card from "../../components/card/Card";
import { IMenu1Depth } from "../../../api/services/menuService";
import ItemTable from "./components/ItemTable";
import ButtonPage from "../../example/components/button/ButtonPage";
import Button from "../../../components/button/ExampleButton";
import SystemFooterForm from "./components/SystemFooterForm";
import SubFooterForm from "./components/SubFooterForm";
// import Table from "./components/Table";

function MenuManagement() {
  const [selected, setSelected] = useState<IMenu1Depth | null>(null); // 선택된 코드

  return (
    <div>
      <div className="flex justify-end">
        <div className="flex gap-2 mb-2">
          <Button text="조회" className="btn-primary btn-sm w-12" />
          <Button text="초기화" className="btn-primary btn-sm w-12" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <div className="flex items-center space-x-2 text-base text-slate-900  dark:text-slate-300 rtl:space-x-reverse">
            <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
            <span>시스템메뉴</span>
          </div>

          <ItemTable
            item={selected}
            onClick={(item) => {
              console.log("item", item);
            }}
          />

          {/* Footer */}
          <SystemFooterForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        <div className="">
          <div className="flex items-center space-x-2 text-base text-slate-900  dark:text-slate-300 rtl:space-x-reverse">
            <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
            <span>서브메뉴</span>
          </div>

          <ItemTable
            item={selected}
            onClick={(item) => {
              console.log("item", item);
            }}
          />

          {/* Footer */}
          <SubFooterForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuManagement;
