import React, { FC } from "react";
import StyledButton from "./Button.styles";
import { ButtonProps } from "./types/Button.types";

const Button: FC<ButtonProps> = ({ children, type = "submit", ...rest }) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;
