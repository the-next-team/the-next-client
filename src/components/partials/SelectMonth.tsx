import React from "react";
import { Menu } from "@headlessui/react";
import Dropdown from "../dropdown/Dropdown";
import { Icon } from "@iconify/react";
const actions = [
  {
    name: "Last 28 Days",
  },
  {
    name: " Last Month ",
  },
  {
    name: "  Last Year ",
  },
];
const SelectMonth = () => {
  return (
    <>
      <Dropdown
        classMenuItems=" w-[140px]"
        label={
          <span className="inline-flex flex-col items-center justify-center w-6 h-6 text-lg border rounded border-slate-200 dark:border-slate-700 dark:text-slate-400">
            <Icon icon="heroicons-outline:dots-horizontal" />
          </span>
        }
      >
        <div>
          {actions.map((item, i) => (
            <Menu.Item key={i}>
              <div
                className="`
                
                  hover:bg-secondary-500 dark:hover:bg-slate-600 dark:bg-opacity-60 hover:text-white text-slate-900 dark:text-slate-300
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `"
              >
                <span>{item.name}</span>
              </div>
            </Menu.Item>
          ))}
        </div>
      </Dropdown>
    </>
  );
};

export default SelectMonth;
