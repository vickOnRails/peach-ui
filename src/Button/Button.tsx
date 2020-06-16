import React, { FC } from "react";

import StyledButton from "./Button.styles";
import { ButtonProps } from "./types/Button.types";
import Spinner from "../Spinner/Spinner";

const Button: FC<ButtonProps> = ({
  children,
  type = "submit",
  loading,
  ...rest
}) => {
  return (
    <StyledButton type={type} {...rest} loading={loading}>
      {loading ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Spinner />
          {children}
        </div>
      ) : (
        children
      )}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;
