import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import theme from "../Theme";

const load = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  font-size: 10px;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: ${theme.variants.primary.color};
  background: ${`linear-gradient(to right, ${theme.variants.primary.color} 10%, rgba(255, 31, 31, 0) 42%)`};
  position: relative;
  animation: ${load} 0.75s infinite linear;
  transform: translateZ(0);
  margin-right: 0.5em;

  &::before {
    width: 50%;
    height: 50%;
    background: ${theme.variants.primary.color};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &::after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const Spinner = (): JSX.Element => <StyledSpinner />;

export default Spinner;
