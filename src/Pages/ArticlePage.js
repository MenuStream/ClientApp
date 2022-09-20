import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../MenuComponents/Header";
import Footer from "../MenuComponents/Footer";
import ArticlesList from "../MenuComponents/ArticlesList";
import BackgroundLogo from "../MenuComponents/BackgroundLogo";
import { gtag } from "ga-gtag";

const ArticlePage = ({ Context }) => {
  const { index } = useParams();
  const { data } = Context;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    data &&
      gtag("event", "page_view", {
        page_title: data[index].name,
      });
  }, []);

  return (
    <div className="home">
      <BackgroundLogo />
      <Link to="/menu">
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
