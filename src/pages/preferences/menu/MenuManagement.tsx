import { useState } from "react";
// import Card from "../../components/card/Card";
import { IMenu1Depth } from "../../../api/services/menuService";
import ItemTable from "./components/ItemTable";
import ButtonPage from "../../example/components/button/ButtonPage";
import Button from "../../../components/button/ExampleButton";
// import Table from "./components/Table";

function MenuManagement() {
  const [selected, setSelected] = useState<IMenu1Depth | null>(null); // 선택된 코드

  return (
    <div>
      <div className="flex justify-end">
        <div className="flex gap-2 mb-2">
          <Button text="조회" className="btn-primary btn-sm" />
          <Button text="초기화" className="btn-primary btn-sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          시스템메뉴
          <ItemTable
            item={selected}
            onClick={(item) => {
              console.log("item", item);
            }}
          />
          <div className="flex justify-end mt-2">
            <div className="space-xy-5">
              <Button text="초기화" className="btn-primary btn-sm" />
              <Button text="등록" className="btn-primary btn-sm" disabled />
              <Button text="수정" className="btn-primary btn-sm" />
              <Button text="삭제" className="btn-danger btn-sm" />
            </div>
          </div>
        </div>

        <div className="">
          서브메뉴
          <ItemTable
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuManagement;
