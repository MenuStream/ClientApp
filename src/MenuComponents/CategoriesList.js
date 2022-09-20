import React from "react";
import { MDBCard, MDBCardImage, MDBCardTitle } from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

const CategoriesList = (props) => {
  return (
    <div className="category">
      {props.data &&
        props.data.map((element, index) => (
          <Link
            to={`article/${index}`}
            onClick={() => props.setScrollPosition(window.pageYOffset)}
          >
            <MDBCard
              key={element.name}
              className="MDBCard-Home hover-zoom"
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
          </Link>
        ))}
    </div>
  );
};

export default CategoriesList;
