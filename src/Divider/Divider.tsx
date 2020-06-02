import React, { HTMLAttributes, FC } from "react";
import styled from "../ThemeProvider/styled";

type DividerProps = HTMLAttributes<HTMLHRElement>;

const Divider: FC<DividerProps> = (props) => <StyledDivider {...props} />;

const StyledDivider = styled.hr<DividerProps>`
  border: 0;
  border-bottom: 1px solid #e5e5e5;
`;

export default Divider;
