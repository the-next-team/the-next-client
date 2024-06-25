import { useState } from "react";
// import Card from "../../components/card/Card";
import {
  IMenu1Depth
} from "../../../api/services/menuService";
import ItemTable from "./components/ItemTable";
import Table from "./components/Table";

function MenuManagement() {
  const [selected, setSelected] = useState<IMenu1Depth | null>(null); // 선택된 코드

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <div>
        <Table
          onClick={(item) => {
            setSelected(item);
          }}
        />
      </div>
      <div className="">
        <ItemTable
          item={selected}
          onClick={(item) => {
            console.log("item", item);
          }}
        />
      </div>
    </div>
  );
}

export default MenuManagement;
