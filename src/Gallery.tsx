import React from "react";
import { GalleryContainer } from "./Gallery.styles";
import { Image } from "./images";

function Gallery({
  images,
  selectImage,
}: {
  images: Image[];
  selectImage: (img: Image) => void;
}) {
  return (
    <GalleryContainer>
      {images.map((image) => {
        return (
          <figure key={image.name}>
            <picture onClick={() => selectImage(image)}>
              <source srcSet={`${image.name}.webp`} type="image/webp" />
              <img
                src={`${image.name}.jpg`}
                className="gallery-img"
                alt={image.alt}
              />
            </picture>
          </figure>
        );
      })}
    </GalleryContainer>
  );
}

export default Gallery;
