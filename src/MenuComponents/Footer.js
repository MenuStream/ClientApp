import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { gtag } from "ga-gtag";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ marginBottom: "10px" }} className="footer__buttons">
        <a
          className="instragram-icon-container icon-container"
          onClick={() => gtag("event", "visit_instagram")}
          size="lg"
          floating
          href="https://www.instagram.com/aftereightsousse/"
        >
          <AiFillInstagram />
        </a>

        <a
          className="facebook-icon-container icon-container"
          onClick={() => gtag("event", "visit_facebook")}
          size="lg"
          floating
          href="https://www.facebook.com/AfterEightSousse"
        >
          <AiFillFacebook />
        </a>
      </div>
      <span>Copyright - After Eight</span>
    </div>
  );
};

export default Footer;
