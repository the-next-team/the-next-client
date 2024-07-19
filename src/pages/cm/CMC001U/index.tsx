/**
 * 공통코드관리 페이지
 * 시스템 > 코드관리 > 공통코드관리
 * CMC001U
 */
import { useState } from "react";
import { ICode } from "../../../api/services/codeService";
import CodeItemTable from "./components/CodeItemTable";
import CodeItemTableFooter from "./components/CodeItemTableFooter";
import CodeTable from "./components/CodeTable";
import CodeTableFooter from "./components/CodeTableFooter";
import HeaderForm from "./components/HeaderForm";

function CMC001U() {
  const [selected, setSelected] = useState<ICode | null>(null); // 선택된 코드

  return (
    <div>
      {/* Header */}
      <div className="my-2">
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>

      {/* 대분류 */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <div className="flex items-center mb-1 space-x-2 text-sm font-medium text-slate-900">
            <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
            <span>대분류코드</span>
          </div>
          <CodeTable
            onClick={(item) => {
              setSelected(item);
            }}
          />
          <CodeTableFooter
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        {/* 소분류 */}
        <div className="">
          <div className="flex items-center mb-1 space-x-2 text-sm font-medium text-slate-900">
            <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
            <span>소분류코드</span>
          </div>
          <CodeItemTable
            item={selected}
            onClick={(item) => {
              console.log("item", item);
            }}
          />
          <CodeItemTableFooter onSubmit={(data) => console.log(data)} />
        </div>
      </div>
    </div>
  );
}

export default CMC001U;
