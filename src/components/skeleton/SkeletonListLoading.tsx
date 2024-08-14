
type Props = {
  count: number;
};

const SkeletonListLoading = ({ count }: Props) => {
  const items = Array.from({ length: count });
  return (
    <div className="divide-y divide-slate-100 dark:divide-slate-700">
      {items.map((_, i) => (
        <div className="w-full p-4 mx-auto" key={i}>
          <div className="flex items-center space-x-4 animate-pulse">
            <div className="flex items-center flex-none space-x-2">
              <div className="rounded h-5 w-5 bg-[#C4C4C4] dark:bg-slate-500"></div>
              <div className="rounded h-5 w-5 bg-[#C4C4C4] dark:bg-slate-500"></div>
              <div className="h-8 w-8 rounded-full bg-[#C4C4C4] dark:bg-slate-500"></div>
            </div>
            <div className="flex-1 bg-[#C4C4C4] dark:bg-slate-500 h-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonListLoading;
