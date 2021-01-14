import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { Image } from "./images";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: center;

  #text {
    margin: 16px;
    color: white;
    font-size: 1.5em;
    word-wrap: break-word;
    text-align: center;
    height: 20%;
    margin-top: 15px;
  }

  img {
    min-height: 75%;
    height: 90%;
    width: 90%;
    object-fit: contain;
    margin-top: 40px;
  }
`;

const CustomSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
`;

function DetailImage({ currentImage }: { currentImage: Image }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, [currentImage]);

  return (
    <Wrapper>
      <img
        src={`${currentImage.name.replace("-l", "")}.jpg`}
        alt={currentImage.alt}
        onLoad={() => setLoading(false)}
      />
      <div id="text">{currentImage.alt}</div>
      {loading && <CustomSpinner />}
    </Wrapper>
  );
}

export default DetailImage;
