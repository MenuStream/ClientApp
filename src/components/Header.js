import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <img
        className="logo"
        width={"30%"}
        height={"30%"}
        src="https://i.imgur.com/iIb4ZfB.png"
        alt=""
      />
      <div className="header_text_container">
        <h5 className="header_text">MENU</h5>
      </div>
    </div>
  );
};

export default Header;
