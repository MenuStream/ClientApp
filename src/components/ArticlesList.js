import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { useSpring, animated } from "react-spring";
import ImageModal from "./ImageModal";

const ArticlesList = (props) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 80,
  });

  const [Modal, setModal] = useState(false);
  const [image, setImage] = useState(null);

  const showModal = (image) => {
    setModal(true);
    setImage(image);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      <animated.div style={fadeIn} className="body_category">
        <MDBIcon
          onClick={() => props.setDisplay(-1)}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          fas
          size="2x"
          icon="arrow-circle-left"
        />

        <div className="category">
          <h1 className="category_name">{props.data[props.display].name}</h1>
          <div className="category_articles">
            {props.data[props.display].articles.map((article) => (
              <div key={article.name} className="article">
                <div className="article_container">
                  <div>
                    <span
                      className="article_name"
                      style={{ marginRight: "10px" }}
                    >
                      {article.name}
                    </span>

                    {article.image && (
                      <MDBIcon
                        fas
                        icon="camera"
                        size="sm"
                        style={{ cursor: "pointer" }}
                        onClick={() => showModal(article.image)}
                      />
                    )}
                  </div>
                  <span className="article_description">
                    {article.description}
                  </span>
                </div>
                <span className="article_price">{article.price}</span>
              </div>
            ))}
          </div>
        </div>
      </animated.div>

      {Modal && <ImageModal hideModal={hideModal} imageUrl={image} />}
    </>
  );
};

export default ArticlesList;
