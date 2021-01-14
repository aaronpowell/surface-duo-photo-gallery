import React, { useState } from "react";
import images, { Image } from "./images";
import "./App.css";
import Gallery from "./Gallery";
import Details from "./DetailContainer";
import Fold from "./Fold";
import FullView from "./FullView";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (screen-spanning: single-fold-vertical) {
    flex-direction: row;
  }

  @media (screen-spanning: single-fold-horizontal) {
    flex-direction: column-reverse;
  }

  @media (screen-spanning: none) {
    flex-direction: row;
  }
`;

function App() {
  const [currentImage, setCurrentImage] = useState<Image>();

  return (
    <Container>
      <Gallery images={images} selectImage={setCurrentImage} />
      <Fold id="foo" />
      <Details currentImage={currentImage} />
      <FullView
        currentImage={currentImage}
        closeImage={() => setCurrentImage(undefined)}
        prevImage={(image) =>
          setCurrentImage(images[images.indexOf(image) - 1])
        }
        nextImage={(image) =>
          setCurrentImage(images[images.indexOf(image) + 1])
        }
      />
    </Container>
  );
}

export default App;
