import { useState } from "react";
import SimpleBar from "simplebar-react";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import SkeletonListLoading from "../../../components/skeleton/SkeletonListLoading";
import useWidth from "../../../hooks/layout/useWidth";
import TodoHeader from "./components/TodoHeader";

const topfilterList = [
  {
    value: "all",
    name: "My Task",
    icon: "uil:image-v",
  },
  {
    value: "fav",
    name: "Starred",
    icon: "heroicons:star",
  },
  {
    value: "done",
    name: "Completed",
    icon: "heroicons:document-check",
  },
  {
    value: "trash",
    name: "Trash",
    icon: "heroicons:trash",
  },
];

const bottomfilterList = [
  {
    name: "Team",
    value: "team",
  },
  {
    name: "low",
    value: "low",
  },
  {
    name: "medium",
    value: "medium",
  },
  {
    name: "high",
    value: "high",
  },
  {
    name: "update",
    value: "update",
  },
];

function TodoPage() {
  const { width, breakpoints } = useWidth();
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <div className="relative flex overflow-hidden md:space-x-5 app_height rtl:space-x-reverse">
        <div
          className={`transition-all duration-150 flex-none min-w-[260px]
        ${
          width < breakpoints.lg
            ? "absolute h-full top-0 md:w-[260px] w-[200px] z-[999]"
            : "flex-none min-w-[260px]"
        }

        `}
        >
          <Card bodyClass=" py-6 h-full flex flex-col" className="h-full">
            <div className="flex-1 h-full px-6">
              <Button
                icon="heroicons-outline:plus"
                text="Add Task"
                className="block w-full btn-dark "
                onClick={() => {}}
              />
            </div>
            <SimpleBar className="h-full px-6 ">
              <ul className="mt-6 list">
                {/* {topfilterList.map((item, i) => (
                  <Topfilter
                    filter={filter}
                    item={item}
                    key={i}
                    onClick={() => handleFilter(item.value)}
                  />
                ))} */}
              </ul>
              <div className="block py-4 text-xs font-semibold uppercase text-slate-800 dark:text-slate-400">
                Tags
              </div>
              <ul>
                {/* {bottomfilterList.map((item, i) => (
                  <BottomFilter
                    filter={filter}
                    item={item}
                    key={i}
                    onClick={() => handleFilter(item.value)}
                  />
                ))} */}
              </ul>
            </SimpleBar>
          </Card>
        </div>

        {/* overlay */}
        {width < breakpoints.lg && (
          <div
            className="overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter
         backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"
            onClick={() => {}}
          ></div>
        )}

        <div className="flex-1 md:w-[calc(100%-320px)]">
          <Card bodyClass="p-0  h-full" className="h-full">
            <SimpleBar className="h-full overflow-x-hidden all-todos">
              <TodoHeader onChange={(e) => {}} />
              {isLoading && <SkeletonListLoading count={20} />}
              {!isLoading && (
                <ul className="h-full -mb-6 divide-y divide-slate-100 dark:divide-slate-700">
                  {/* {filteredTodos.map((todo, i) => (
                    <Todos key={i} todo={todo} />
                  ))} */}
                  {/* {filteredTodos.length === 0 && (
                    <li className="mx-6 mt-6">
                      <Badge
                        label="No Result Found"
                        className="block w-full text-white bg-danger-500 text-start"
                      />
                    </li>
                  )} */}
                </ul>
              )}
            </SimpleBar>
          </Card>
        </div>
      </div>
    </>
  );
}

export default TodoPage;
