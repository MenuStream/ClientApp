import React from "react";

const ImageModal = ({ hideModal, imageUrl }) => {
  return (
    <div className="modalContainer">
      <div className="modalBackground" onClick={hideModal}></div>
      <div className="modalBox">
        <img src={imageUrl} alt="" className="modalImage" />
      </div>
    </div>
  );
};

export default ImageModal;
