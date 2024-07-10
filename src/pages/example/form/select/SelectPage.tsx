import { ChangeEvent, useState } from 'react';
import ReactSelect from 'react-select';
import Card from '../../../../components/card/Card';
import Select from '../../../../components/form/Select';
import OptionsSelect from './components/OptionsSelect';

const options = [
    {
      value: "option1",
      label: "Option 1",
    },
    {
      value: "option2",
      label: "Option 2",
    },
    {
      value: "option3",
      label: "Option 3",
    },
  ];
  const SelectPage = () => {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
    };
    const handleChange2 = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue2(e.target.value);
    };

    return (
      <div className="space-y-5 ">
        <Card title="Basic Select's">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <div className="space-y-3">
              <Select
                label="Basic Select"
                options={options}
                onChange={handleChange}
                value={value}
              />
              <div className="text-base">
                <span className="inline-block mr-3 text-slate-500 dark:text-slate-300">
                  Selected value:
                </span>
                <span className="font-semibold text-slate-900 dark:text-slate-300">
                  {value}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <Select
                label="Size Select"
                options={options}
                onChange={handleChange2}
                value={value2}
                size={5}
              />
              <div className="text-base">
                <span className="inline-block mr-3 text-slate-500 dark:text-slate-300">
                  Selected value:
                </span>
                <span className="font-semibold text-slate-900 dark:text-slate-300">
                  {value2}
                </span>
              </div>
            </div>
          </div>
        </Card>
        <Card title="React Select">
          <ReactSelect />
        </Card>
        <Card title="React Select">
          <OptionsSelect />
        </Card>
      </div>
    );
  };

  export default SelectPage;