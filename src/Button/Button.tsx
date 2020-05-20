import React, { FC } from "react";

interface ButtonProps extends HTMLButtonElement {}

const Button: FC<ButtonProps> = ({ children }) => <button>{children}</button>;

export default Button;
