import { useState } from "react";
import Checkbox from "../../../../components/checkbox/Checkbox";
import Icon from "../../../../components/icons/Icon";

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
      <ul className="divide-y divide-slate-100">
        {lists.map((item) => (
          <li className="flex items-center justify-between py-1" key={item.id}>
            <div className="flex items-center">
              <Checkbox
                checked={item.isDone}
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
              <p
                className={`flex-1 text-sm ${item.isDone ? "line-through text-slate-500" : "text-slate-600"}`}
              >
                {item.title.slice(0, 20) + "..."}
              </p>
            </div>
            <div className="flex items-center">
              <span className="space-x-1 text-base text-secondary-500">
                {item.isDone === false && (
                  <button
                    type="button"
                    className="transition duration-150 hover:text-primary-800"
                  >
                    <Icon icon="heroicons:pencil-square" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => deleteItem(item.id)}
                  className="transition duration-150 hover:text-primary-800"
                >
                  <Icon icon="heroicons:trash" />
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
