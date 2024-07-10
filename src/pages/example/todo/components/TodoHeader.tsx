import { Menu } from "@headlessui/react";
import { ChangeEvent } from "react";
import Dropdown from "../../../../components/dropdown/Dropdown";
import Icon from "../../../../components/icons/Icon";
import useWidth from "../../../../hooks/layout/useWidth";

type Props = {
  onChange?: (event: ChangeEvent) => void;
};

function TodoHeader({ onChange }: Props) {
  const { width, breakpoints } = useWidth();
  const actions = [
    {
      name: "Reset Sort",
      icon: "heroicons-outline:sort-ascending",
    },
    {
      name: "Sort A-Z ",
      icon: "heroicons-outline:sort-ascending",
    },
    {
      name: " Sort Z-A ",
      icon: "heroicons-outline:sort-descending",
    },
  ];

  return (
    <div className="md:flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 rounded-t-md">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        {width < breakpoints.lg && (
          <div
            className="flex flex-col items-center justify-center w-6 h-6 text-sm rounded-full cursor-pointer md:h-8 md:w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 md:text-base"
            onClick={() => {}}
          >
            <Icon icon="heroicons-outline:menu-alt-2" />
          </div>
        )}
        <div className="max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse">
          <div className="flex-none dark:text-slate-300">
            <Icon icon="heroicons-outline:search" />
          </div>
          <div className="flex-1">
            <input
              onChange={onChange}
              type="text"
              placeholder="Search Task"
              className="px-2 py-1 text-sm transition duration-150 bg-transparent rounded font-regular text-slate-600 dark:text-slate-300 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Dropdown
          classMenuItems="w-[130px]"
          label={
            <span className="inline-flex flex-col items-center justify-center w-8 h-8 text-lg rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400 bg-slate-100">
              <Icon icon="heroicons-outline:dots-vertical" />
            </span>
          }
        >
          {actions.map((item, i) => (
            <Menu.Item key={i}>
              <div
                className={`

              ${"hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white"}
               w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `}
              >
                <span className="text-base">
                  <Icon icon={item.icon} />
                </span>
                <span>{item.name}</span>
              </div>
            </Menu.Item>
          ))}
        </Dropdown>
      </div>
    </div>
  );
}

export default TodoHeader;
