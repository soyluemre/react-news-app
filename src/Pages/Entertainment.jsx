import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ContextProvider } from "../Context/ContextProvider";
import Pagination from "../components/Pagination";
import newsImage from "../assets/img/news.jpg";

const Entertainment = () => {
  const { data, setData } = useContext(ContextProvider);
  const [page, setPage] = useState(1);
  const totalPages = 3;
  const apiKey = "20bbec40569c41c4a9dad51b0903d6b0";

  const startIndex = (page - 1) * 3;
  const selectedData = data.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
  };

  const fetchData = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`
      )
      .then((res) => setData(res.data.articles))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="business-page container my-5">
      <div className="row container">
        <div className="col-sm-12 col-xl-7 my-3">
          <h5 className="ms-3">Entertainment</h5>
          {data ? (
            selectedData.map((items, index) => (
              <div className="my-3 p-3 rounded business-cards" key={index}>
                <div className="row business-card">
                  <div className="col-sm-12 col-md-8">
                    <a
                      href={items?.url}
                      style={{
                        fontSize: "1rem",
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "500",
                      }}
                      target="_blank"
                      className="aaa"
                    >
                      {items?.title?.slice(0, 65).concat(".....")}
                    </a>
                    <p>{items?.description?.slice(0, 65).concat(".....")}</p>
                  </div>
                  <div className="col-md-4">
                    <img
                      src={items ? items.urlToImage : newsImage}
                      alt="newsimage"
                      className="img-fluid business-img"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5 className="fw-bold text-center mt-5">Loading..</h5>
          )}
        </div>
        <div className="col-sm-12 col-xl-5 mt-5">
          <p className="popular-post-p">Popular Post</p>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">01</span>
              <a href="#" className="popular-post-a">
                Remarkable statement from NASA!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">New York Times</span>
              <br />
              <span className="span-3"> 3 min. ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">02</span>
              <a href="#" className="popular-post-a">
                Drought is coming!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Washington Post</span>
              <br />
              <span className="span-3">2 min. ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">03</span>
              <a href="#" className="popular-post-a">
                The winner of the breathtaking match is Liverpool!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Los Angeles Times</span>
              <br />
              <span className="span-3">4 min. ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">04</span>
              <a href="#" className="popular-post-a">
                Important statements from the World Bank
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Wall Street Journal</span>
              <br />
              <span className="span-3">6 min. ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">05</span>
              <a href="#" className="popular-post-a">
                Rihanna is releasing a new album!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">The Boston Globe</span>
              <br />
              <span className="span-3">2 min. ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">06</span>
              <a href="#" className="popular-post-a">
                Turkiye and Russia issued a joint statement
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Daily News</span>
              <br />
              <span className="span-3">7 min. ⭐</span>
            </div>
          </div>
        </div>
      </div>

      <div>
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

export default Entertainment;
