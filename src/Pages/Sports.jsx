import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ContextProvider } from "../Context/ContextProvider";
import Pagination from "../components/Pagination";

const Sports = () => {
  const { data, setData } = useContext(ContextProvider);
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
        `https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=${apiKey}`
      )
      .then((res) => setData(res.data.articles))
      .catch((error) => console.log(error));
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="business-page my-5">
      <div className="row">
        <div className="col-sm-12 col-xl-8 my-3">
          <h5 className="ms-3">Sports</h5>
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
                      {items.title}
                    </a>
                    <p>{items?.description}</p>
                  </div>
                  <div className="col-md-4">
                    <img
                      src={items.urlToImage}
                      alt="newsimage"
                      className="img-fluid business-img"
                    />
                  </div>
                  <a className="text-danger" href={items.url} target="_blank">
                    View More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <h5 className="fw-bold text-center mt-5">Loading..</h5>
          )}
        </div>
        <div className="col-sm-12 col-xxl-4 mt-5">
          <p className="popular-post-p">Popular Post</p>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">01</span>
              <a href="#" className="popular-post-a">
                Ziraat Türkiye Kupası Kura Çekimleri
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Fanatik Gazetesi</span>
              <br />
              <span className="span-3">30 Ocak • 2 dakika ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">02</span>
              <a href="#" className="popular-post-a">
                İstanbul'a Kar Geliyor!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Hürriyet Gazetesi</span>
              <br />
              <span className="span-3">02 Şubat • 4 dakika ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">03</span>
              <a href="#" className="popular-post-a">
                Tarkan Yeni Albüm Çıkaracağını Söyledi!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Onedio</span>
              <br />
              <span className="span-3">03 Şubat • 2 dakika ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">04</span>
              <a href="#" className="popular-post-a">
                Yeşilçam'ın Usta Oyuncusunun Son Hali Görenleri Şaşkına Çevirdi!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Takvim Gazetesi</span>
              <br />
              <span className="span-3">28 Ocak • 7 dakika ⭐</span>
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

export default Sports;
