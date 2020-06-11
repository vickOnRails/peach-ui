import { ButtonHTMLAttributes } from "react";

import { VariantProp } from "../../Theme/variants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  htmlType?: "button" | "submit" | "reset";
  variant?: VariantProp;
}
