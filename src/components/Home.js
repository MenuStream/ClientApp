import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import CategoriesList from "./CategoriesList";
import ArticlesList from "./ArticlesList";
import loader from "../assets/loader.png";
import BackgroundLogo from "./BackgroundLogo";

const Home = () => {
  const [data, setData] = useState(null);
  const [display, setDisplay] = useState(-1);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    display === -1 ? window.scrollTo(0, scrollPosition) : window.scrollTo(0, 0);
  }, [display, scrollPosition]);

  const fetchData = async () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    await axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data !== null ? (
        <div className="Container">
          <BackgroundLogo />
          <Header setDisplay={setDisplay} />
          <div className="body">
            {display === -1 ? (
              <CategoriesList
                setDisplay={setDisplay}
                data={data}
                setScrollPosition={setScrollPosition}
              />
            ) : (
              <ArticlesList
                data={data}
                setDisplay={setDisplay}
                display={display}
              />
            )}
          </div>
          <Footer />
        </div>
      ) : (
        <img id="loader" src={loader} alt="" />
      )}
    </>
  );
};

export default Home;
