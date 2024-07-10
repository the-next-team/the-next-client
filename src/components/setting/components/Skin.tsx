import { ChangeEvent } from "react";
import useSkin from "../../../hooks/layout/useSkin";
import { SkinType } from "../../../states/layout/layoutAtom";
import Radio from "../../form/Radio";

function Skin() {
  const [skin, setSkin] = useSkin();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkin(e.target.value as SkinType);
  };

  return (
    <div>
      <h4 className="mb-2 text-base font-normal text-slate-600 dark:text-slate-300">
        스킨
      </h4>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <Radio
          label="기본"
          name="skin"
          value="default"
          checked={skin === "default"}
          onChange={handleChange}
          className="w-4 h-4"
        />
        <Radio
          label="경계 선"
          name="skin"
          value="bordered"
          checked={skin === "bordered"}
          onChange={handleChange}
          className="w-4 h-4"
        />
      </div>
    </div>
  );
}

export default Skin;
