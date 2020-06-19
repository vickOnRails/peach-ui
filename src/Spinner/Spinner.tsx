import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

import "./Spinner.css";

const spinnerSize = 35;

const spinner = keyframes`
  0% {
      stroke-dashoffset: ${0.66 * spinnerSize};
      transform: rotate(0deg);
  } 50% {
      stroke-dashoffset: ${3.14 * spinnerSize};
      transform: rotate(400deg);
  } 100% {
      stroke-dashoffset: ${0.66 * spinnerSize};
      transform: rotate(950deg);
  }`;

const StyledSpinner = styled.svg`
  width: ${spinnerSize}px;
  height: ${spinnerSize}px;
  x: 0px;
  y: 0px;
  viewbox: 0 0 ${spinnerSize} ${spinnerSize};

  circle {
    fill: transparent;
    stroke: #212121;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: ${3.14 * spinnerSize};
    animation: ${spinner} 2s linear infinite;
    transform-origin: ${0.5 * spinnerSize}px ${0.5 * spinnerSize}px 0;
  }
`;

const Spinner = () => (
  <StyledSpinner viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" className="circle" />
  </StyledSpinner>
);

export default Spinner;
