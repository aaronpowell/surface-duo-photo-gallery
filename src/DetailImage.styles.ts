import styled from "styled-components";
import Spinner from "./Spinner";

export const Wrapper = styled.div`
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

export const CustomSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
`;
