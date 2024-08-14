
type Props = {
  count?: number;
};

const SkeletonGrid = ({ count = 6 }: Props) => {
  const items = Array.from({ length: count });
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
      {items.map((_, i) => (
        <div
          className="h-full p-6 bg-white rounded-md dark:bg-slate-700 shadow-base"
          key={i}
        >
          <div className="animate-pulse">
            <header className="flex items-center justify-between space-x-6">
              <div className="flex items-center flex-1 space-x-4">
                <div className="flex items-center flex-none space-x-2">
                  <div className="h-10 w-10 rounded bg-[#C4C4C4] dark:bg-slate-500"></div>
                </div>
                <div className="flex-1 bg-[#C4C4C4] dark:bg-slate-500 h-2 rounded-full"></div>
              </div>
              <div className="flex-none">
                <div className="h-6 w-6 rounded-full bg-[#C4C4C4] dark:bg-slate-500"></div>
              </div>
            </header>
            <div className="py-6 space-y-2">
              <div className="h-[6px] bg-[#C4C4C4] dark:bg-slate-500"></div>
              <div className="h-[6px] bg-[#C4C4C4] dark:bg-slate-500"></div>
              <div className="h-[6px] bg-[#C4C4C4] dark:bg-slate-500"></div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <span className="h-[4px] bg-[#C4C4C4] dark:bg-slate-500 block"></span>
                <span className="h-[4px] bg-[#C4C4C4] dark:bg-slate-500 block"></span>
              </div>

              <div className="space-y-2">
                <span className="h-[4px] bg-[#C4C4C4] dark:bg-slate-500 block"></span>
                <span className="h-[4px] bg-[#C4C4C4] dark:bg-slate-500 block"></span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-6">
              <div className="flex -space-x-1">
                <div className="h-6 w-6 bg-[#C4C4C4] dark:bg-slate-500 rounded-full"></div>
                <div className="h-6 w-6 bg-[#C4C4C4] dark:bg-slate-500 rounded-full"></div>
                <div className="h-6 w-6 bg-[#C4C4C4] dark:bg-slate-500 rounded-full"></div>
              </div>
              <div>
                <span className="h-[18px] bg-[#C4C4C4] dark:bg-slate-500 w-[130px] inline-block rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonGrid;
