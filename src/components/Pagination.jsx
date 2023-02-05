import React from "react";

const Pagination = ({ totalPages, page, setPage, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      <ul className="pagination pagination-div">
        <li className={page === 1 ? `page-item disabled` : `page-item`}>
          <a
            href="#!"
            className="page-link"
            onClick={() => setPage((prev) => (prev === 1 ? prev : prev - 1))}
          >
            Previous
          </a>
        </li>

        {pages.map((num, index) => {
          return (
            <li onClick={() => handleClick(num)} key={index}>
              <a
                className={
                  page === num ? `page-link pagination-active` : `page-link`
                }
                href="#!"
              >
                {num}
              </a>
            </li>
          );
        })}

        <li
          className={page === pages.length ? `page-item disabled` : `page-item`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setPage((prev) => (prev === pages.length ? prev : prev + 1))
            }
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
