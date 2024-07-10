import { ChangeEvent } from "react";
import useFooterType from "../../../hooks/layout/useFooterType";
import { FooterType } from "../../../states/layout/layoutAtom";
import Radio from "../../form/Radio";

function FooType() {
  const [footerType, setFooterType] = useFooterType();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFooterType(e.target.value as FooterType);
  };
  const fotypes = [
    {
      label: "고정",
      value: "sticky",
    },
    {
      label: "정적",
      value: "static",
    },

    {
      label: "숨김",
      value: "hidden",
    },
  ];

  return (
    <div>
      <h4 className="mb-2 text-base font-normal text-slate-600 dark:text-slate-300">
        하단바 타입
      </h4>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {fotypes?.map((item, index) => (
          <Radio
            key={index}
            label={item.label}
            name="navbarType"
            value={item.value}
            checked={footerType === item.value}
            onChange={handleChange}
            className="w-4 h-4"
          />
        ))}
      </div>
    </div>
  );
}

export default FooType;
