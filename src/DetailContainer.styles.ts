import styled from "styled-components";

export const DetailContainer = styled.div`
  height: 0vh;
  width: 0vw;
  background-color: black;
  color: white;
  overflow: hidden;

  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .detail-select {
    color: white;
    font-size: 2em;
    text-align: center;
    margin-top: 20px;
  }

  @media (screen-spanning: single-fold-vertical) {
    height: 100vh;
    width: calc(100vw - env(fold-left) - env(fold-width));
  }

  @media (screen-spanning: single-fold-horizontal) {
    height: var(--zenbook-span2-height, env(fold-top));
    width: 100vw;
  }

  @media (screen-spanning: none) {
    height: 0vh;
    width: 0vw;
  }
`;
