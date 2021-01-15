import React, { useState, useEffect } from "react";
import { Container } from "./App.styles";
import {
  ArrowLeft,
  ArrowRight,
  Close,
  CustomSpinner,
  Img,
} from "./FullView.styles";
import { Image } from "./images";

function FullView({
  currentImage,
  closeImage,
  prevImage,
  nextImage,
}: {
  currentImage?: Image;
  closeImage: () => void;
  prevImage: (currentImage: Image) => void;
  nextImage: (currentImage: Image) => void;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, [currentImage]);

  if (!currentImage) {
    return null;
  }

  return (
    <Container onClick={closeImage}>
      <Close onClick={closeImage} />
      <ArrowLeft
        onClick={(e) => {
          e.stopPropagation();
          prevImage(currentImage);
        }}
      />
      {loading && <CustomSpinner />}
      <Img
        src={`${currentImage.name.replace("-l", "")}.jpg`}
        onLoad={() => setLoading(false)}
      />
      <ArrowRight
        onClick={(e) => {
          e.stopPropagation();
          nextImage(currentImage);
        }}
      />
    </Container>
  );
}

export default FullView;
