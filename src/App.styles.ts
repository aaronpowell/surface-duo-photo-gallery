import styled from "styled-components";

export const Container = styled.div`
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
