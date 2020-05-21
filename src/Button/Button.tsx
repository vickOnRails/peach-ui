import React, { FC } from "react";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends HTMLButtonElement {
  type: ButtonType;
}

const Button: FC<ButtonProps> = ({ type, children }) => {
  // eslint-disable-next-line react/button-has-type
  return <button type={type}>{children}</button>;
};

export default Button;
