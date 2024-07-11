import { useState } from "react";
// import Card from "../../components/card/Card";
import {
  IMenu1Depth
} from "../../../api/services/menuService";
import ItemTable from "./components/ItemTable";
import ButtonPage from "../../example/components/button/ButtonPage";
import Button from "../../../components/button/ExampleButton";
// import Table from "./components/Table";

function MenuManagement() {
  const [selected, setSelected] = useState<IMenu1Depth | null>(null); // 선택된 코드

  return (
    <div>
      <div className="flex justify-end gap-3">
      <Button text="조회" className="btn-primary btn-sm"/>
      <Button text="초기화" className="btn-primary btn-sm"/>
      </div>
      
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <div className="">
        시스템메뉴
        <ItemTable
          item={selected}
          onClick={(item) => {
            console.log("item", item);
          }}
        />
      </div>
      <div className="">
        서브메뉴
        <ItemTable
          item={selected}
          onClick={(item) => {
            console.log("item", item);
          }}
        />
      </div>
    </div>
    </div>
    
  );
}

export default MenuManagement;
