import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import News from "./News";
import Slider from "./Slider";
import { ContextProvider } from "../Context/ContextProvider";

const FetchData = () => {
  const { data, setData } = useContext(ContextProvider);
  // const [totalPages, setTotalPages] = useState(3);
  const totalPages = 3;
  // const apiKey = "02a1e0e608cb49b1936a76ccb837bec9";
  const apiKey = "676f017549224f488970f1835f9db971";

  const fetchData = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apiKey}`)
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
