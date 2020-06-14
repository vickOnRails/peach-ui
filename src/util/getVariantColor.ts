import theme from "../Theme";
import { VariantProp } from "../Theme/variants";
import { VariantStyle } from "../Button/types/Button.types";

const getVariantColor = (
  variant: VariantProp | undefined,
  variantStyle: VariantStyle | undefined
): string => {
  if (variant === undefined) return theme.variants.primary.color;

  if (["ghost", "outline"].includes(variantStyle as string))
    return "transparent";

  return theme.variants[variant].color;
};

const getVariantHoverColor = (variant: VariantProp | undefined): string => {
  if (variant === undefined) return theme.variants.primary.hover;

  return theme.variants[variant].hover;
};

export { getVariantHoverColor, getVariantColor };
