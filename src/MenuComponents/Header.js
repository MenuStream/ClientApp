import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" style={{ width: "40%" }}>
        <img
          className="logo"
          width="100%"
          height="auto"
          src="https://i.imgur.com/iIb4ZfB.png"
          alt=""
        />
      </Link>
      <div className="header_text_container">
        <h5 className="header_text">MENU</h5>
      </div>
    </div>
  );
};

export default Header;
