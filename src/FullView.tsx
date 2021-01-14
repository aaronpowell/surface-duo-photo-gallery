import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { Image } from "./images";

const Container = styled.div`
  height: 100%;
  width: 100%;
  backdrop-filter: blur(5px) contrast(0.8);
  -webkit-backdrop-filter: blur(5px) contrast(0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (screen-spanning: single-fold-horizontal),
    (screen-spanning: single-fold-vertical) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  opacity: 0.7;
  border-radius: 15%;
  transform: rotate(45deg);

  &:hover {
    opacity: 1;
  }
`;

const ArrowLeft = styled(Arrow)`
  border-bottom: solid 10px white;
  border-left: solid 10px white;
`;

const ArrowRight = styled(Arrow)`
  border-top: solid 10px white;
  border-right: solid 10px white;
`;

const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  background-color: white;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const CustomSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
`;

const Img = styled.img`
  height: 95%;
  width: 85%;
  object-fit: contain;
  user-select: none;
`;

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
