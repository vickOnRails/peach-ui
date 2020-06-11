import theme from "../Theme";
import { VariantProp } from "../Theme/variants";

/**
 * Returns color of variant
 */

const getVariantColor = (variant: VariantProp | undefined): string => {
  if (variant === undefined) return theme.variants.primary.color;

  return theme.variants[variant].color;
};

const getVariantHoverColor = (variant: VariantProp | undefined): string => {
  if (variant === undefined) return theme.variants.primary.hover;

  return theme.variants[variant].hover;
};

export { getVariantHoverColor, getVariantColor };
