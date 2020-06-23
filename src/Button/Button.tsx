import React, { FC } from "react";

import StyledButton, { SpinnerContainer } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import Spinner from "../Spinner/Spinner";
// import Spinner from "../Spinner/Spinner";

const Button: FC<ButtonProps> = ({
  children,
  type = "submit",
  loading,
  ...rest
}) => {
  return (
    <StyledButton {...rest} type={type} loading={loading}>
      {loading ? (
        <SpinnerContainer>
          <Spinner />
          {children}
        </SpinnerContainer>
      ) : (
        children
      )}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;
