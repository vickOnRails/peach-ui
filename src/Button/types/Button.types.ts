import { ButtonHTMLAttributes } from "react";

import { VariantProp } from "../../Theme/variants";

export type VariantStyle = "outline" | "filled" | "ghost";
export type TypeProp = "button" | "submit" | "reset";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * `type` of Button. Either of "button" | "submit" | "reset"
   */
  type?: TypeProp;

  /**
   * Set the variant of the Button. @see VariantProp
   */
  variant?: VariantProp;

  /**
   * Appearance of the Button. Either of "outline" | "filled" | "ghost"
   */
  variantStyle?: VariantStyle;

  /**
   * Set button loading state
   */
  loading?: boolean;
}
