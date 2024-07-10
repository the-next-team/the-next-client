import { useState } from "react";
import Checkbox from "../../../../components/checkbox/Checkbox";
import Icon from "../../../../components/icons/Icon";
import Tooltip from "../../../../components/tooltip/Tooltip";

type Props = {
  item: {
    id: string;
    title: string;
    images: { label: string; image: string }[];
    isDone: boolean;
    categories: { value: string; label: string }[];
    isFav: boolean;
  };
};

function Tasks({ item }: Props) {
  const [checked, setChecked] = useState(item.isDone);
  const [fav, setFav] = useState(item.isFav);

  return (
    <>
      <li className="flex items-center px-6 py-6 space-x-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-todo rtl:space-x-reverse">
        <div>
          <Checkbox value={checked} onChange={() => {}} />
        </div>

        <label>
          <input
            type="checkbox"
            className="hidden"
            checked={fav}
            onChange={() => {}}
          />
          {item.isFav ? (
            <Icon
              icon="heroicons:star-20-solid"
              className="text-xl leading-[1] cursor-pointer text-[#FFCE30]"
            />
          ) : (
            <Icon
              icon="heroicons:star"
              className="text-xl leading-[1] cursor-pointer opacity-40 dark:text-white"
            />
          )}
        </label>
        <span
          className={` ${
            item.isDone ? "line-through dark:text-slate-300" : ""
          } flex-1 text-sm text-slate-600 dark:text-slate-300 truncate`}
        >
          {item.title}
        </span>

        <div className="flex">
          <span className="flex flex-none space-x-2 text-base text-secondary-500 rtl:space-x-reverse">
            <div className="flex justify-start -space-x-1.5 min-w-[60px] rtl:space-x-reverse">
              {item.images?.map((img, i) => (
                <div
                  key={i}
                  className={` ${
                    item.isDone ? " opacity-40" : " opacity-100"
                  } h-6 w-6 rounded-full ring-1 ring-secondary-500`}
                >
                  <Tooltip placement="top" arrow content={img.label}>
                    <img
                      src={img.image}
                      alt={img.label}
                      className="w-full h-full rounded-full"
                    />
                  </Tooltip>
                </div>
              ))}
            </div>
            {item.categories?.map((cta, ctaIndex) => (
              <div key={ctaIndex}>
                <span
                  className={` bg-opacity-20 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block

             ${cta.value === "team" ? "bg-danger-500 text-danger-500" : ""}
                  ${
                    cta.value === "low" ? "bg-success-500 text-success-500" : ""
                  }
                  ${
                    cta.value === "medium"
                      ? "bg-warning-500 text-warning-500"
                      : ""
                  }
                  ${
                    cta.value === "high"
                      ? "bg-primary-500 text-primary-500"
                      : ""
                  }
                  ${cta.value === "update" ? "bg-info-500 text-info-500" : ""}
            `}
                >
                  {cta.label}
                </span>
              </div>
            ))}

            <button type="button" className="text-slate-400" onClick={() => {}}>
              <Icon icon="heroicons-outline:pencil-alt" />
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="transition duration-150 hover:text-danger-500 text-slate-400"
            >
              <Icon icon="heroicons-outline:trash" />
            </button>
          </span>
        </div>
      </li>
    </>
  );
}

export default Tasks;
