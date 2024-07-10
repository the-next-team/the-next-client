import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

type Props = {
  title?: string;
};

const HomeBredCurbs = ({ title }: Props) => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: String(new Date().setMonth(11)),
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-wrap items-center justify-between mb-6">
      <h4 className="inline-block text-xl font-medium capitalize lg:text-2xl text-slate-900 ltr:pr-4 rtl:pl-4">
        {title}
      </h4>
      <div className="flex items-center space-x-2 sm:space-x-4 sm:justify-end rtl:space-x-reverse">
        <div className="relative date-range-custom">
          <Datepicker
            value={value}
            inputClassName="input-class"
            containerClassName="container-class"
            onChange={handleValueChange}
          />
        </div>
        <div className="relative date-range-custom2">
          <Datepicker
            value={value}
            asSingle={true}
            inputClassName="input-class"
            containerClassName="container-class"
            onChange={handleValueChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBredCurbs;
