import React, { useState } from "react";
import images, { Image } from "./images";
import "./App.css";
import Gallery from "./Gallery";
import Details from "./DetailContainer";
import Fold from "./Fold";
import FullView from "./FullView";
import {
  Foldable,
  FoldableScreen,
  useIsDualScreen,
} from "@aaronpowell/react-foldable";
import { Container } from "./App.styles";

function App() {
  const [currentImage, setCurrentImage] = useState<Image>();
  const isDualScreen = useIsDualScreen();

  return (
    <Container>
      <Gallery images={images} selectImage={setCurrentImage} />
      <Fold />
      <Foldable>
        <FoldableScreen
          matchScreen={1}
          component={() => <Details currentImage={currentImage} />}
        />
      </Foldable>

      {!isDualScreen && (
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
      )}
    </Container>
  );
}

export default App;
