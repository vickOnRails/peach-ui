import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const rotate = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
`;

const StyledChild = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 3px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: ${rotate} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;

  &::first-child {
    animation-delay: -0.4s;
  }

  &::nth-child(2) {
    animation-delay: -0.25s;
  }
  &:last-child(3) {
    animation-delay: -0.1s;
  }
`;

// FIXME: Make Spinner a more robust component with it's __tests__ styled etc.
const Spinner = (): JSX.Element => (
  <StyledSpinner>
    <StyledChild />
    <StyledChild />
    <StyledChild />
    <StyledChild />
  </StyledSpinner>
);

export default Spinner;
