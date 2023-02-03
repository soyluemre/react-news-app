import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ContextProvider } from "../Context/ContextProvider";

const FetchData = () => {
  //   const [data, setData] = useState("");
  const { data, setData } = useContext(ContextProvider);

  const fetchData = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&apiKey=02a1e0e608cb49b1936a76ccb837bec9"
      )
      .then((res) => setData(res.data.articles))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container my-5 fetch-data-row">
      <div className="row my-3">
        {data ? (
          data.slice(3, 19).map((items, index) => (
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
    </div>
  );
};

export default FetchData;
