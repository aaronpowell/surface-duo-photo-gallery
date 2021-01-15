import React from "react";
import { Image } from "./images";
import DetailImage from "./DetailImage";
import { DetailContainer } from "./DetailContainer.styles";

function Details({ currentImage }: { currentImage?: Image }) {
  return (
    <DetailContainer>
      {currentImage ? (
        <div className="detail">
          <DetailImage currentImage={currentImage} />
        </div>
      ) : (
        <div className="detail-select">Select an image in the gallery.</div>
      )}
    </DetailContainer>
  );
}

export default Details;
