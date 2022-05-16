import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextProvider } from "../App";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticlesList from "../components/ArticlesList";
import BackgroundLogo from "../components/BackgroundLogo";

const ArticlePage = () => {
  const Context = useContext(ContextProvider);
  const { index } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <BackgroundLogo />
      <Link to="/">
        <Header />
      </Link>
      <div className="home_body">
        <ArticlesList data={Context.data} index={index} />
      </div>
      <Footer />
    </div>
  );
};
export default ArticlePage;
