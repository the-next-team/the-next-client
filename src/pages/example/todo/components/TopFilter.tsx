import Icon from "../../../../components/icons/Icon";

type Props = {
  filter: string;
  item: { value: string; icon: string; name: string; count: number };
  onClick?: () => void;
};

const TopFilter = ({ filter, item, onClick }: Props) => {
  return (
    <li>
      <label
        onClick={onClick}
        className={` flex items-center cursor-pointer px-2 py-3 rounded
                   ${
                     filter === item.value
                       ? "bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200"
                       : "  text-slate-600 dark:text-slate-300 "
                   }
                      `}
      >
        <div className="flex flex-1 space-x-2 rtl:space-x-reverse">
          <span
            className={` text-xl
                        ${
                          filter === item.value
                            ? " text-slate-900 dark:text-slate-100"
                            : " text-slate-400 dark:text-slate-400"
                        }
                `}
          >
            <Icon icon={item.icon} />
          </span>
          <span
            className={` capitalize text-sm
                        ${
                          filter === item.value ? " font-medium" : "font-normal"
                        }
                      `}
          >
            {item.name}
          </span>
        </div>
        <span className="flex-none text-sm font-normal capitalize">
          {item.count}
        </span>
      </label>
    </li>
  );
};

export default TopFilter;
