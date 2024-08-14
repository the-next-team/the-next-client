
type Props = {
  count: number;
};

const SkeletionTable = ({ count }: Props) => {
  const items = Array.from({ length: count });
  return (
    <div className="w-full p-6 bg-white rounded-md dark:bg-slate-700 shadow-base">
      <table className="w-full border-separate table-fixed animate-pulse border-spacing-4">
        <thead>
          <tr>
            <th scope="col">
              <div className="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
            </th>
            <th scope="col">
              <div className="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
            </th>
            <th scope="col">
              <div className="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
            </th>
            <th scope="col">
              <div className="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
            </th>
            <th scope="col">
              <div className="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {items.map((_, i) => (
            <tr key={i}>
              <td>
                <div className="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
              </td>
              <td>
                <div className="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
              </td>
              <td>
                <div className="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
              </td>
              <td>
                <div className="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
              </td>
              <td>
                <div className="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletionTable;
