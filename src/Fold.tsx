import styled from "styled-components";

const Fold = styled.div`
  background-size: 40px 40px;

  background-color: #737373;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );

  @media (screen-spanning: single-fold-vertical) {
    height: env(fold-height);
    width: env(fold-width);
  }

  @media (screen-spanning: single-fold-horizontal) {
    height: env(fold-height);
    width: env(fold-width);
  }

  @media (screen-spanning: none) {
    height: 0;
    width: 0;
  }
`;

export default Fold;
