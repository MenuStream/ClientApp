import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../App";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoriesList from "../components/CategoriesList";
import loader from "../assets/loader.png";
import BackgroundLogo from "../components/BackgroundLogo";

const Home = () => {
  const Context = useContext(ContextProvider);

  useEffect(() => {
    window.scrollTo(0, Context.scrollPosition);
  }, [Context.scrollPosition]);

  return (
    <>
      {Context.data !== null ? (
        <div className="home">
          <BackgroundLogo />
          <Header />
          <div className="home_body">
            <CategoriesList
              data={Context.data}
              setScrollPosition={Context.setScrollPosition}
            />
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
