import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ContextProvider } from "../Context/ContextProvider";
import Pagination from "../components/Pagination";

const Business = () => {
  const { data, setData } = useContext(ContextProvider);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 3;
  const apiKey = "02a1e0e608cb49b1936a76ccb837bec9";

  const startIndex = (page - 1) * 3;
  const selectedData = data.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
  };

  const fetchData = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=${apiKey}`
      )
      .then((res) => setData(res.data.articles))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {data
          ? selectedData.map((item, index) => {
              <div
                key={index}
                className="card mb-3 col-6"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item?.urlToImage}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item?.title}</h5>
                      <p className="card-text">{item?.description}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>;
            })
          : "Loading.."}
        <div className="col-6">
          <h5>Lorem ipsum dolor sit.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
            numquam.
          </p>
        </div>
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

export default Business;
