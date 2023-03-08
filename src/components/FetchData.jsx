import React, { useContext, useEffect } from "react";
import axios from "axios";
import News from "./News";
import Slider from "./Slider";
import { ContextProvider } from "../Context/ContextProvider";

const FetchData = () => {
  const { data, setData } = useContext(ContextProvider);
  const totalPages = 3;
  const apiKey = "20bbec40569c41c4a9dad51b0903d6b0";

  const fetchData = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => setData(res.data.articles))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Slider data={data} />
      <News data={data} totalPages={totalPages} />
    </>
  );
};

export default FetchData;
