import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ContextProvider } from "../Context/ContextProvider";
import Pagination from "../components/Pagination";
import newsImage from "../img/news.jpg";

const Science = () => {
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
        `https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=${apiKey}`
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
          <h5 className="ms-3">Science</h5>
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
                EYT Teklifi Meclis Gündeminde!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Sabah Gazetesi</span>
              <br />
              <span className="span-3">29 Ocak • 3 dakika ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">02</span>
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
              <span className="span-1">03</span>
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
              <span className="span-1">04</span>
              <a href="#" className="popular-post-a">
                TEM Otoyolunda Feci Kaza!
              </a>
            </div>
            <div className="span-div">
              <span className="span-2">Milliyet Gazetesi</span>
              <br />
              <span className="span-3">03 Şubat • 6 dakika ⭐</span>
            </div>
          </div>
          <div className="popular-posts">
            <div className="d-flex">
              <span className="span-1">05</span>
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
              <span className="span-1">06</span>
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

export default Science;
