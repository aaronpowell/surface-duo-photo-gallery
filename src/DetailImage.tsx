import React, { useEffect, useState } from "react";
import { CustomSpinner, Wrapper } from "./DetailImage.styles";
import { Image } from "./images";

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
