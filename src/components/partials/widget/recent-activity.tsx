import React from "react";

const activity = [
  {
    id: 1,
    content: "공지사항",
  },
  {
    id: 2,
    content: "공지사항",
  },
  {
    id: 3,
    content: "공지사항",
  },
  {
    id: 4,
    content: "공지사항",
  },
  {
    id: 5,
    content: "공지사항",
  },
  {
    id: 6,
    content: "공지사항",
  },
  {
    id: 7,
    content: "공지사항",
  },
  {
    id: 6,
    content: "공지사항",
  },
  {
    id: 7,
    content: "공지사항",
  },
  {
    id: 8,
    content: "공지사항",
  },
];

const RecentActivity = () => {
  return (
    <div>
      <ul className="h-full space-y-3 overflow-x-auto list-item">
        {activity.map((item, i) => (
          <li
            className="flex items-center pb-3 space-x-3 border-b rtl:space-x-reverse border-slate-100 dark:border-slate-700 last:border-b-0 last:pb-0"
            key={i}
          >
            <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
              <div className="overflow-hidden text-sm text-slate-600 dark:text-slate-300 text-ellipsis whitespace-nowrap">
                {item.content}
              </div>
            </div>
            <div className="flex-1 ltr:text-right rtl:text-left">
              <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                1 hours
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
