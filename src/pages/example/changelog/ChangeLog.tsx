import { Disclosure } from "@headlessui/react";
import Badge from "../../../components/badge/Badge";
import Card from "../../../components/card/Card";
import Icon from "../../../components/icons/Icon";

const items: {
  version: string;
  date: string;
  changes: {
    name: string;
    tag?: string;
  }[];
}[] = [
  {
    version: "Version 2.0.1",
    date: "1 February 2023",
    changes: [
      {
        name: "Monochrome mode",
        tag: "added",
      },
      {
        name: "Axios configuration",
        tag: "fixed",
      },
      {
        name: "Other minor issues",
        tag: "fixed",
      },
    ],
  },
  {
    version: "Version 2.0.0",
    date: "24 January 2023",
    changes: [
      {
        name: "Change log page added.",
        tag: "added",
      },
      {
        name: "Badge added in sidebar.",
        tag: "added",
      },
      {
        name: "Vuex replaced with pinia",
        tag: "update",
      },
      {
        name: "Webpack replaced with Vite.",
        tag: "update",
      },
      {
        name: "Other minor issues",
        tag: "fixed",
      },
    ],
  },
  {
    version: "Version 1.0.1 ",
    date: "3 January 2023",
    changes: [
      {
        name: "RTL version added.",
        tag: "added",
      },
      {
        name: "Sidebar updated.",
        tag: "update",
      },
      {
        name: "Other minor issues",
        tag: "fixed",
      },
    ],
  },
  {
    version: "Version 1.0.0 ",
    date: "29 December 2022",
    changes: [
      {
        name: "Initial Release",
      },
    ],
  },
];

function ChangeLog() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-8">
        <Card title="Version's">
          <div>
            <Badge label="new " className="text-white bg-primary-500" />
          </div>
          <div className="mt-6 space-y-5">
            {items.map((item, i) => (
              <div key={i} className="mb-3">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-8 py-4 text-base font-medium transition duration-150 cursor-pointer bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md text-start text-slate-600 dark:text-slate-300">
                        <span>
                          {item.version}
                          <span className="text-xs font-semibold text-slate-400">
                            - Published on {item.date}
                          </span>
                        </span>
                        <span
                          className={` ${
                            open && "rotate-180 transform"
                          }  transition-all duration-150 text-xl`}
                        >
                          <Icon icon="heroicons:chevron-down-solid" />
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <div className="text-sm font-normal bg-white border border-t-0 text-slate-600 dark:bg-slate-900 dark:text-slate-300 rounded-b-md dark:border dark:border-slate-700 dark:border-t-0 border-slate-100">
                          <div className="px-8 py-4">
                            {item.changes.map((data, j) => (
                              <div key={j}>
                                <div className="flex items-center mt-2 space-x-3 text-sm text-slate-600 dark:text-slate-300">
                                  <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                  <span>{data.name}</span>

                                  <span
                                    className={` px-2 rounded-full text-xs capitalize
                                        ${
                                          data.tag === "added"
                                            ? "bg-indigo-100 text-indigo-500"
                                            : data.tag === "update"
                                            ? "bg-yellow-100 text-yellow-500"
                                            : data.tag === "fixed"
                                            ? "bg-red-100 text-red-500"
                                            : ""
                                        }
                                        `}
                                  >
                                    {data.tag}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <Card title="CHANGELOG">
          <h5 className="text-xs font-medium">VERSION HISTORY</h5>
          <ul className="mt-6 space-y-3 divide-y dark:divide-slate-700 divide-slate-100">
            {items.map((item, i) => (
              <li
                className="flex items-center justify-between pt-3 text-xs text-slate-600 dark:text-slate-300"
                key={i}
              >
                <span>{item.version} </span>
                <span>{item.date}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default ChangeLog;
