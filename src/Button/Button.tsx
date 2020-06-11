import React, { FC } from "react";
import StyledButton from "./ButtonStyles";
import { ButtonProps } from "./types/ButtonTypes";

const Button: FC<ButtonProps> = ({
  children,
  htmlType = "submit",
  ...rest
}) => {
  return (
    <StyledButton type={htmlType} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;
