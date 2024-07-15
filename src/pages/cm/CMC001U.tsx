/**
 * 공통코드 페이지
 * 시스템 > 코드관리 > 공통코드
 * CMC001U
 */
import { useState } from "react";
import { ICode } from "../../api/services/codeService";
import CodeItemTable from "./components/CodeItemTable";
import CodeTable from "./components/CodeTable";
import Button from "../../components/button/ExampleButton";
import HeaderForm from "./components/HeaderForm";
import CodeTableFooter from "./components/CodeTableFooter";

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
          <div className="flex items-center space-x-2 text-base text-slate-900 dark:text-slate-300 rtl:space-x-reverse">
            <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
            <span>대분류코드</span>
          </div>

          <CodeTable
            onClick={(item) => {
              setSelected(item);
            }}
          />

          <div>
            <CodeTableFooter
              onSubmit={(data) => {
                console.log(data);
              }}
            />
          </div>
        </div>

        {/* 소분류 */}
        <div className="">
          <div className="flex items-center space-x-2 text-base text-slate-900 dark:text-slate-300 rtl:space-x-reverse">
            <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
            <span>소분류코드</span>
          </div>

          <CodeItemTable
            item={selected}
            onClick={(item) => {
              console.log("item", item);
            }}
          />
          <div className="flex justify-end mt-2">
            <div className="space-xy-5">
              <Button text="초기화" className="btn-primary btn-sm" />
              <Button text="등록" className="btn-primary btn-sm" />
              <Button text="수정" className="btn-primary btn-sm" disabled />
              <Button text="삭제" className="btn-primary btn-sm" disabled />
              <Button text="보기순서변경" className="btn-primary btn-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CMC001U;
