import React, { ReactNode } from "react";
import { CSSReset } from "../src/CSSReset";

const FrameComponent = ({ children }: { children: ReactNode }): ReactNode => (
  <>
    <CSSReset />
    {children}
  </>
);

export default FrameComponent;
