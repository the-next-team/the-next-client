import { useState } from "react";
import { ICode } from "../../../../api/services/codeService";
import CodeItemTable from "./components/CodeItemTable";
import CodeTable from "./components/CodeTable";
import Button from "../../../../components/button/ExampleButton";

function CommonCodePage() {
  const [selected, setSelected] = useState<ICode | null>(null); // 선택된 코드

  return (
    <div>
      <div className="flex justify-end">
        <div className="flex gap-2 mb-2">
          <Button text="조회" className="btn-primary btn-sm" />
          <Button text="초기화" className="btn-primary btn-sm" />
          <Button text="엑셀" className="btn-primary btn-sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <div className="flex items-center space-x-2 text-base text-slate-900  dark:text-slate-300 rtl:space-x-reverse">
            <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
            <span>대분류코드</span>
          </div>

          <CodeTable
            onClick={(item) => {
              setSelected(item);
            }}
          />
          <div className="flex justify-end mt-2">
            <div className="space-xy-5">
              <Button text="새로고침" className="btn-primary btn-sm" />
              <Button text="초기화" className="btn-primary btn-sm" />
              <Button text="등록" className="btn-primary btn-sm" disabled />
              <Button text="수정" className="btn-primary btn-sm" />
              <Button text="삭제" className="btn-danger btn-sm" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center space-x-2 text-base text-slate-900  dark:text-slate-300 rtl:space-x-reverse">
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
              <Button text="삭제" className="btn-danger btn-sm" disabled />
              <Button text="보기순서변경" className="btn-primary btn-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonCodePage;
