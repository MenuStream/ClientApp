import React, { useEffect } from "react";

import "./Home.css";
import Header from "../MenuComponents/Header";
import Footer from "../MenuComponents/Footer";
import CategoriesList from "../MenuComponents/CategoriesList";
import loader from "../assets/loader.png";
import BackgroundLogo from "../MenuComponents/BackgroundLogo";

const Home = ({ Context }) => {
  const { data, scrollPosition, setScrollPosition } = Context;

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      {data !== null ? (
        <div className="home">
          <BackgroundLogo />
          <Header />
          <div className="home_body">
            <CategoriesList data={data} setScrollPosition={setScrollPosition} />
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
