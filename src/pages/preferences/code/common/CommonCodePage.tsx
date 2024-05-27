import { useState } from "react";
import { ICode } from "../../../../api/services/codeService";
import CodeItemTable from "./components/CodeItemTable";
import CodeTable from "./components/CodeTable";

function CommonCodePage() {
  const [selected, setSelected] = useState<ICode | null>(null); // 선택된 코드

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <div>
        <CodeTable
          onClick={(item) => {
            setSelected(item);
          }}
        />
      </div>
      <div className="">
        <CodeItemTable
          item={selected}
          onClick={(item) => {
            console.log("item", item);
          }}
        />
      </div>
    </div>
  );
}

export default CommonCodePage;
