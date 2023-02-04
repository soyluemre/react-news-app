import React, { useState } from "react";
import Pagination from "./Pagination";

const News = ({ data, totalPages }) => {
  const [page, setPage] = useState(1);

  const handleClick = (num) => {
    setPage(num);
  };

  const startIndex = (page - 1) * 3;
  const selectedData = data.slice(startIndex, startIndex + 9);

  return (
    <div className="container my-5 fetch-data-row">
      <div className="row my-3">
        {data ? (
          selectedData.slice(3, 20).map((items, index) => (
            <div
              className="container my-3 p-3 rounded col-sm-12 col-lg-4 fetch-data-col"
              key={index}
            >
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={items.urlToImage}
                  alt="newsimage"
                  className="img-fluid col-img"
                />
              </div>
              <h5 style={{ fontSize: "1rem" }} className="my-2">
                {items.title}
              </h5>

              <a className="text-danger" href={items.url} target="_blank">
                View More
              </a>
            </div>
          ))
        ) : (
          <h5 className="fw-bold text-center">Loading..</h5>
        )}
      </div>
      <div className="">
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default News;
