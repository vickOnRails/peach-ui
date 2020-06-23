import { ButtonHTMLAttributes } from "react";

import { VariantProp } from "../Theme/variants";

export type VariantStyle = "outline" | "filled" | "ghost";
export type TypeProp = "button" | "submit" | "reset";

export type ButtonSizeProp = "small" | "medium" | "large";
export type BordersProps = "rounded" | "squared" | "circled";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Sets the `type` of Button. Either of "button" | "submit" | "reset"
   */
  type?: TypeProp;

  /**
   * Sets the variant of the Button. @see VariantProp
   */
  variant?: VariantProp;

  /**
   * Appearance of the Button. Either of "outline" | "filled" | "ghost"
   */
  variantStyle?: VariantStyle;

  /**
   * Set Button loading state
   */
  loading?: boolean;

  /**
   *  If set to `true`, Button will be full width
   */
  block?: boolean;

  /**
   * Sets the size of the Button
   */
  size?: ButtonSizeProp;

  /**
   *  Sets the border radius of the Button
   */
  borders?: BordersProps;
}
