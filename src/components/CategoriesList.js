import React from "react";
import { MDBCard, MDBCardImage, MDBCardTitle } from "mdb-react-ui-kit";
import { useSpring, animated } from "react-spring";

import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

const CategoriesList = (props) => {
  const gaEventTracker = useAnalyticsEventTracker("Articles");
  const fadeIn = useSpring({
    from: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      opacity: 0,
    },
    to: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      opacity: 1,
    },
    delay: 150,
  });

  return (
    <animated.div style={fadeIn} className="body__home">
      {props.data.map((element, index) => (
        <MDBCard
          key={element.name}
          className="MDBCard-Home hover-zoom"
          onClick={() => {
            gaEventTracker("Article ", element.name);
            props.setScrollPosition(window.pageYOffset);
            props.setDisplay(index);
          }}
          style={{ textAlign: "center", margin: "20px", cursor: "pointer" }}
        >
          <MDBCardImage
            className="MDBCardImage-Home "
            style={{ objectFit: "cover" }}
            overlay
            src={element.image_url}
            alt="..."
            position="top"
          />
          <MDBCardTitle
            style={{
              fontSize: "14px",
              letterSpacing: "normal",
              marginTop: "10px",
            }}
          >
            {element.name}
          </MDBCardTitle>
        </MDBCard>
      ))}
    </animated.div>
  );
};

export default CategoriesList;
