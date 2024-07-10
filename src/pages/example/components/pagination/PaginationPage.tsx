import { useState } from "react";
import Card from "../../../../components/card/Card";
import Pagination from "../../../../components/pagination/Pagination";

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can add any other logic you need here, such as making an API call to fetch data for the new page
  };
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Card title="Basic Pagination">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Card>
      <Card title="Pagination With Background">
        <Pagination
          className="px-3 py-2 mx-auto rounded bg-slate-100 dark:bg-slate-500 w-fit"
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Card>
      <div className="col-span-1 xl:col-span-2">
        <Card title="Pagination With Text">
          <Pagination
            text
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </Card>
      </div>
    </div>
  );
};

export default PaginationPage;
