import { useEffect, useState } from "react";
import Icon from "../icons/Icon";

type Props = {
  totalPages: number;
  currentPage: number;
  text?: boolean;
  className?: string | undefined;
  handlePageChange: (page: number) => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  text = false,
  className = "custom-class",
}: Props) => {
  const [pages, setPages] = useState<number[]>([]);
  const rangeStart = useEffect(() => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [totalPages]);

  return (
    <div className={className}>
      <ul className="pagination">
        <li>
          {text ? (
            <button
              className=" text-slate-600 dark:text-slate-300 prev-next-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          ) : (
            <button
              className="flex flex-col items-center justify-center w-6 h-6 text-xl leading-4 text-slate-900 dark:text-white prev-next-btn "
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <Icon icon="heroicons-outline:chevron-left" />
            </button>
          )}
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              className={`${page === currentPage ? "active" : ""} page-link`}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          {text ? (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className=" text-slate-600 dark:text-slate-300 prev-next-btn"
            >
              Next
            </button>
          ) : (
            <button
              className="flex flex-col items-center justify-center w-6 h-6 text-xl leading-4 text-slate-900 dark:text-white prev-next-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <Icon icon="heroicons-outline:chevron-right" />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
