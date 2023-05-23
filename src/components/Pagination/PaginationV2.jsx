import { Fragment, useEffect, useState } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const PaginationV2 = ({
  total,
  current = 1,
  pageSize,
  onChange,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(current);
  const totalPage = Math.ceil(total / pageSize);

  const onChangePage = (page) => {
    setCurrentPage(page);
    onChange && onChange(page);
  };

  const prevPage = () => {
    currentPage !== 1 && onChangePage(currentPage - 1);
  };

  const nextPage = () => {
    currentPage !== totalPage &&
      totalPage !== 0 &&
      onChangePage(currentPage + 1);
  };

  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  if (startPage <= 0) {
    endPage -= startPage - 1;
    startPage = 1;
  }

  if (endPage > totalPage) {
    endPage = totalPage;
  }

  useEffect(() => {
    setCurrentPage(current);
  }, [current, pageSize]);

  return (
    <div
      className={`pg-pagination bg-transparent px-4 py-6 flex items-center justify-between  border-gray-200 sm:px-6 ${
        className ? className : ""
      }`}
    >
      <div className="pg-paginate-mobile flex-1 flex justify-between sm:hidden">
        <button
          onClick={prevPage}
          className="pg-paginate-prev-btn relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
        >
          Trước
        </button>
        <div className="flex gap-4 items-center">
          <div
            aria-current="page"
            className={`pg-page-item pg-page-item-${current} font-semibold rounded-full max-w-[38px] z-10 bg-cyan-50 border-cyan-500 text-primaryColor flex items-center justify-center px-4 py-2 border text-sm`}
          >
            {current}
          </div>
          {" / "}
          <div
            aria-current="page"
            className={`pg-page-item pg-page-item-${totalPage} font-semibold rounded-full max-w-[38px] z-10 border-gray-300 flex items-center justify-center px-4 py-2 border text-sm`}
          >
            {totalPage}
          </div>
        </div>
        <button
          onClick={nextPage}
          className="pg-paginate-next-btn ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
        >
          Sau
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
        <div className="flex items-center gap-2">
          <nav
            className="pg-paginate-pc relative z-0 inline-flex rounded-full space-x-2"
            aria-label="Pagination"
          >
            <button
              onClick={prevPage}
              className="pg-paginate-prev-btn relative inline-flex items-center px-2 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Trước</span>
              <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            {startPage > 1 && (
              <Fragment>
                <Page
                  current={currentPage}
                  page={1}
                  onChangePage={onChangePage}
                />
                {startPage > 2 && <PageBreak />}
              </Fragment>
            )}
            {Array.from({ length: endPage - startPage + 1 }).map(
              (item, idx) => (
                <Page
                  key={idx}
                  page={idx + startPage}
                  current={currentPage}
                  onChangePage={onChangePage}
                />
              )
            )}
            {endPage < totalPage && (
              <Fragment>
                {endPage < totalPage - 1 && <PageBreak />}
                <Page
                  current={currentPage}
                  page={totalPage}
                  onChangePage={onChangePage}
                />
              </Fragment>
            )}
            {/* Current: "z-10 bg-green-50 border-green-500 text-primaryColor", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <button
              onClick={nextPage}
              className="pg-paginate-next-btn relative inline-flex items-center px-2 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sau</span>
              <HiChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

const Page = ({ current, page, onChangePage }) => {
  return current === page ? (
    <button
      aria-current="page"
      className={`pg-page-item pg-page-item-${page} font-semibold rounded-full max-w-[38px] z-10 bg-cyan-50 border-cyan-500 text-primaryColor flex items-center justify-center px-4 py-2 border text-sm`}
    >
      {page}
    </button>
  ) : (
    <button
      onClick={() => onChangePage(page)}
      className={`pg-page-item pg-page-item-${page} font-semibold text-black bg-white max-w-[38px] rounded-full border-gray-300  hover:bg-gray-50  flex items-center justify-center px-4 py-2 border text-sm`}
    >
      {page}
    </button>
  );
};

const PageBreak = () => (
  <span className="pg-paginate-page-break relative inline-flex items-center px-6 py-2 mx-2 border-gray-300 bg-white text-sm font-medium text-gray-700">
    . . .
  </span>
);

export default PaginationV2;
