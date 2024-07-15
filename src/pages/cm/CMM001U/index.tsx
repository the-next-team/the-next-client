/**
 * 메뉴관리 페이지
 * 시스템 > 메뉴권한 > 메뉴관리
 * CMM001U
 */
import { useState } from "react";
// import Card from "../../components/card/Card";
import { IMenu1Depth } from "../../../api/services/menuService";
import Button from "../../../components/button/ExampleButton";
import ItemTable from "../../cm/CMM001U/components/ItemTable";
import SubFooterForm from "../../cm/CMM001U/components/SubFooterForm";
import SystemFooterForm from "../../cm/CMM001U/components/SystemFooterForm";
// import Table from "./components/Table";

function CMM001U() {
  const [selected, setSelected] = useState<IMenu1Depth | null>(null); // 선택된 코드

  return (
    <div>
      <div className="flex justify-end">
        <div className="flex gap-2 mb-2">
          <Button text="조회" className="w-12 btn-primary btn-sm" />
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <div className="flex items-center space-x-2 text-base text-slate-900 dark:text-slate-300 rtl:space-x-reverse">
            <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
            <span>시스템메뉴</span>
          </div>

          <div className="mb-2">
            <ItemTable
              item={selected}
              onClick={(item) => {
                console.log("item", item);
              }}
            />
          </div>

          {/* Footer */}
          <SystemFooterForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        <div className="">
          <div className="flex items-center space-x-2 text-base text-slate-900 dark:text-slate-300 rtl:space-x-reverse">
            <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
            <span>서브메뉴</span>
          </div>

          <div className="mb-2">
            <ItemTable
              item={selected}
              onClick={(item) => {
                console.log("item", item);
              }}
            />
          </div>

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

export default CMM001U;
