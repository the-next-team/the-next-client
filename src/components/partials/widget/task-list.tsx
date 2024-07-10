import React, { useState } from "react";
import Checkbox from "../../checkbox/Checkbox";
import Icon from "../../icons/Icon";
const TaskLists = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "해야 할 일",
      isDone: true,
    },
    {
      id: 2,
      title: "해야 할 일",
      isDone: true,
    },
    {
      id: 3,
      title: "해야 할 일",
      isDone: false,
    },
    {
      id: 4,
      title: "해야 할 일",
      isDone: true,
    },
    {
      id: 5,
      title: "해야 할 일",
      isDone: false,
    },
    {
      id: 6,
      title: "해야 할 일",
      isDone: false,
    },
  ]);

  const deleteItem = (id: any) => {
    setLists(lists.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ul className="-mx-6 -mb-6 divide-y divide-slate-100 dark:divide-slate-700">
        {lists.map((item) => (
          <li
            className="flex items-center px-6 py-4 space-x-4 rtl:space-x-reverse"
            key={item.id}
          >
            <div className="flex items-center flex-none space-x-2 rtl:space-x-reverse">
              <Checkbox
                id=""
                label=""
                value={item.isDone}
                onChange={() => {
                  setLists(
                    lists.map((list) =>
                      list.id === item.id
                        ? { ...list, isDone: !list.isDone }
                        : list
                    )
                  );
                }}
              />
            </div>
            <div
              className={`flex-1 flex  ${
                item.isDone ? "line-through dark:text-white" : ""
              }`}
            >
              <span className="flex-1 text-sm text-slate-600 dark:text-slate-300">
                {item.title.slice(0, 20) + "..."}
              </span>
              <span className="flex-none space-x-2 text-base text-secondary-500 rtl:space-x-reverse">
                {item.isDone === false && (
                  <button type="button">
                    <Icon icon="heroicons-outline:pencil-alt" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => deleteItem(item.id)}
                  className="transition duration-150 hover:text-danger-500"
                >
                  <Icon icon="heroicons-outline:trash" />
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskLists;
