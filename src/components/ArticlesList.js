import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import ImageModal from "./ImageModal";
import { Link } from "react-router-dom";

const ArticlesList = (props) => {
  const { index, data } = props;

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
      {data && (
        <div className="articleList">
          <Link to="/">
            <MDBIcon
              style={{ marginBottom: "50px", cursor: "pointer" }}
              fas
              size="2x"
              icon="arrow-circle-left"
            />
          </Link>

          <div className="articleList_body">
            <h1 className="articleList_body_name">{data[index].name}</h1>
            <div className="articleList_body_list">
              {data[index].articles.map((article) => (
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
        </div>
      )}
      {Modal && <ImageModal hideModal={hideModal} imageUrl={image} />}
    </>
  );
};

export default ArticlesList;
