import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-gap: 2px;
  background-color: black;
  grid-auto-flow: dense;
  overflow-y: scroll;
  scrollbar-width: thin;
  --scrollbar-background: #dfdfdf;
  --scrollbar-thumb: #84898b;

  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-background);

  @media (min-width: 320px) and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbar-background);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb);
    border-radius: 10px;
    border: 3px solid var(--scrollbar-background);
  }

  .gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (screen-spanning: single-fold-vertical) {
    width: env(fold-left);
    height: 100vh;
  }

  @media (screen-spanning: single-fold-horizontal) {
    width: 100vw;
    height: var(
      --zenbook-span1-height,
      calc(100vh - env(fold-top) - env(fold-height))
    );
  }

  @media (screen-spanning: none) {
    width: 100vw;
    height: 100vh;
  }
`;
