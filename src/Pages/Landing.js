import React, { useState, useEffect } from "react";
import hero from "../assets/hero.png";
import loader from "../assets/loader.png";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

import "./Landing.css";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="landing-container">
      <div class="landing-background">
        <img
          onLoad={() => setLoaded(true)}
          src={hero}
          alt="landing-background-img"
          id="landing-background-img"
        />
      </div>
      {loaded ? (
        <>
          <div class="landing-header-logo">
            <img
              className="logo"
              width="100%"
              height="auto"
              src="https://i.imgur.com/iIb4ZfB.png"
              alt=""
            />
          </div>
          <div class="landing-content">
            <h1 className="text-white text-title">
              The right place to <span className="text-green">enjoy</span> food
              and <span className="text-green">relax</span>
            </h1>
            <h4 className="text-white text-description">
              Need food and a good place to eat? Welcome to our humble place
              where you can eat good food peacefully
            </h4>
            <div className="buttons">
              <Link to="/menu" className="router_link">
                <button className="btn btn_green btn_menu">Menu</button>
              </Link>
              <button className="btn btn_white btn_callus">
                <a href="tel:+21699240548" className="callus-link router_link ">
                  <FiPhoneCall className="phoneIcon" />
                  <span>Call Us</span>
                </a>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div class="loader_container">
          <div className="loader_background"></div>
          <img id="loader" src={loader} alt="" />
        </div>
      )}
    </div>
  );
};

export default Landing;
