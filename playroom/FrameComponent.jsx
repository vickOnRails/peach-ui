import React from "react";
import { CSSReset } from "../src/CSSReset";

const FrameComponent = ({ children }) => (
  <>
    <CSSReset />
    {children}
  </>
);

export default FrameComponent;
