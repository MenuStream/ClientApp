import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextProvider } from "../App";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticlesList from "../components/ArticlesList";
import BackgroundLogo from "../components/BackgroundLogo";
import { gtag } from "ga-gtag";

const ArticlePage = () => {
  const { data } = useContext(ContextProvider);
  const { index } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    data && gtag("event", "page_view", { page_title: data[index].name });
  }, []);

  return (
    <div className="home">
      <BackgroundLogo />
      <Link to="/">
        <Header />
      </Link>
      <div className="home_body">
        <ArticlesList data={data} index={index} />
      </div>
      <Footer />
    </div>
  );
};
export default ArticlePage;
