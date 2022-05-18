import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { gtag } from "ga-gtag";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ marginBottom: "10px" }} className="footer__buttons">
        <MDBBtn
          onClick={() => gtag("event", "visit_instagram")}
          size="lg"
          floating
          style={{ backgroundColor: "#ac2bac", marginRight: "10px", zIndex: 0 }}
          href="https://www.instagram.com/aftereightsousse/"
        >
          <MDBIcon fab icon="instagram" />
        </MDBBtn>
        <MDBBtn
          onClick={() => gtag("event", "visit_facebook")}
          size="lg"
          floating
          style={{ backgroundColor: "#ac2bac", zIndex: 0 }}
          href="https://www.facebook.com/AfterEightSousse"
        >
          <MDBIcon fab icon="facebook" />
        </MDBBtn>
      </div>
      <span>Copyright - After Eight</span>
    </div>
  );
};

export default Footer;
