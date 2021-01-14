import styled from "styled-components";
import Spinner from "./Spinner";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  backdrop-filter: blur(5px) contrast(0.8);
  -webkit-backdrop-filter: blur(5px) contrast(0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  opacity: 0.7;
  border-radius: 15%;
  transform: rotate(45deg);

  &:hover {
    opacity: 1;
  }
`;

export const ArrowLeft = styled(Arrow)`
  border-bottom: solid 10px white;
  border-left: solid 10px white;
`;

export const ArrowRight = styled(Arrow)`
  border-top: solid 10px white;
  border-right: solid 10px white;
`;

export const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  background-color: white;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const CustomSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
`;

export const Img = styled.img`
  height: 95%;
  width: 85%;
  object-fit: contain;
  user-select: none;
`;
