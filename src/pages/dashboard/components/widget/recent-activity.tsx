const activity = [
  {
    id: 1,
    content: "공지사항",
    date: "1시간전",
  },
  {
    id: 2,
    content: "공지사항",
    date: "2024-06-30",
  },
  {
    id: 3,
    content: "공지사항",
    date: "2024-05-24",
  },
  {
    id: 4,
    content: "공지사항",
    date: "2024-05-22",
  },
  {
    id: 5,
    content: "공지사항",
    date: "2024-05-21",
  },
  {
    id: 6,
    content: "공지사항",
    date: "2024-04-23",
  },
  {
    id: 7,
    content: "공지사항",
    date: "2024-04-11",
  },
  {
    id: 6,
    content: "공지사항",
    date: "2024-04-10",
  },
];

const RecentActivity = () => {
  return (
    <div>
      <ul className="h-full divide-y divide-slate-100">
        {activity.map((item, i) => (
          <li key={i} className="flex items-center justify-between gap-1 py-1">
            <div className="flex items-center gap-1">
              {i === 0 && (
                <div className="bg-primary-800 px-1 rounded-sm text-[10px] text-white">
                  N
                </div>
              )}
              <div className="whitespace-nowrap hover:cursor-pointer select-none hover:text-primary-800 text-slate-600 duration-100">
                <p className="text-sm whitespace-nowrap">{item.content}</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-light text-slate-400">{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
