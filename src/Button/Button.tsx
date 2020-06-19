import React, { FC } from "react";

import StyledButton from "./Button.styles";
import { ButtonProps } from "./types/Button.types";
// import Spinner from "../Spinner/Spinner";

const Button: FC<ButtonProps> = ({
  children,
  type = "submit",
  loading,
  ...rest
}) => {
  return (
    <StyledButton {...rest} type={type} loading={loading}>
      {loading ? <p>Loading...</p> : children}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;
