/**
 * 메뉴관리 페이지
 * 시스템 > 메뉴권한 > 메뉴관리
 * CMM001U
 */
import { useState } from "react";
// import Card from "../../components/card/Card";
import { ITopMenu } from "../../../api/services/menuService";
import Button from "../../../components/button/Button";
import ItemTable from "../../cm/CMM001U/components/ItemTable";
import SubFooterForm from "../../cm/CMM001U/components/SubFooterForm";
import SystemFooterForm from "../../cm/CMM001U/components/SystemFooterForm";
import CodeItemTable from "./components/CodeItemTable";
// import Table from "./components/Table";

function CMM001U() {
  const [selected, setSelected] = useState<ITopMenu | null>(null); // 선택된 코드

  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Button text="조회" className="w-12 btn-primary btn-sm" />
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
        </div>
      </div>

      <div className="grid flex-grow grid-cols-2 gap-3">
        <div className="relative flex flex-col h-full">
          <div className="flex items-center mb-1 space-x-2 text-sm font-medium text-slate-900">
            <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
            <span>시스템메뉴</span>
          </div>
          <ItemTable
            onClick={(item) => {
              setSelected(item);
            }}
          />
          {/* Footer */}
          <SystemFooterForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        <div className="relative flex flex-col h-full">
          <div className="flex items-center mb-1 space-x-2 text-sm font-medium text-slate-900">
            <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
            <span>서브메뉴</span>
          </div>
          <CodeItemTable
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

export default CMM001U;
