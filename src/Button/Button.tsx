import React, { FC, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "error" | "success" | "info";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";

  // variant: Variant;
  // filled: boolean;
}

const Button: FC<ButtonProps> = ({ children, type = "submit", ...rest }) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
