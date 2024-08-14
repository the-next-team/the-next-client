import { ChangeEvent } from "react";
import useMenuLayout from "../../../hooks/layout/useMenuLayout";
import { Type } from "../../../states/layout/layoutAtom";
import Radio from "../../form/Radio";

function Menulayout() {
    const [menuType, setMenuLayout] = useMenuLayout();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setMenuLayout(e.target.value as Type);
    };

    return (
      <div>
        <h4 className="mb-2 text-base font-normal text-slate-600 dark:text-slate-300">
          메뉴 레이아웃
        </h4>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <Radio
            label="수직"
            name="menulayout"
            value="vertical"
            checked={menuType === "vertical"}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <Radio
            label="수평"
            name="menulayout"
            value="horizontal"
            checked={menuType === "horizontal"}
            onChange={handleChange}
            className="w-4 h-4"
          />
        </div>
      </div>
    );
}

export default Menulayout