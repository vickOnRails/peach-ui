import styled from "@emotion/styled";
import theme from "../Theme";
import { getVariantColor, getVariantHoverColor } from "../util/getVariantColor";
import { ButtonProps, VariantStyle } from "./types/Button.types";
import { VariantProp } from "../Theme/variants";

const getBtnBorder = (
  variant: VariantProp | undefined,
  variantStyle: VariantStyle
): string => {
  const BORDER_WIDTH = 1;
  const BORDER_STYLE = "solid";

  if (variant === undefined) {
    return `${BORDER_WIDTH}px ${BORDER_STYLE} ${theme.variants.primary.hover}`;
  }

  if (variantStyle === "ghost") {
    return `${BORDER_WIDTH}px ${BORDER_STYLE} ${theme.colors.grey[200]}`;
  }

  if (variantStyle === "outline") {
    return `${BORDER_WIDTH}px ${BORDER_STYLE} ${theme.variants[variant].hover}`;
  }

  return `${BORDER_WIDTH}px ${BORDER_STYLE} ${theme.variants[variant].hover}`;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props): string =>
    props.disabled
      ? theme.colors.grey[200]
      : getVariantColor(props.variant, props.variantStyle)};

  border: ${(props): string =>
    props.variantStyle
      ? getBtnBorder(props.variant, props.variantStyle)
      : "none"};

  color: ${(props): string =>
    props.disabled ? theme.colors.black : theme.colors.white};

  padding: ${(): string => `${theme.spaces.xs} ${theme.spaces.md}`};

  font-size: ${(): string => theme.typography.sizes.body.fontSize};

  border-radius: ${(): string => theme.radius.xs};

  min-width: 2.5em;

  box-shadow: ${(props): string =>
    props.disabled ? theme.shadows.disabled : theme.shadows.resting};

  transition: all 0.25s;

  /* Hover styles */
  :hover {
    cursor: ${(props): string => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${(props): string =>
      props.disabled
        ? theme.colors.grey[200]
        : getVariantHoverColor(props.variant)};
    transform: translateY(-1px);
  }

  :focus,
  :active {
    box-shadow: none;
    outline: none;
    box-shadow: ${(): string => theme.shadows.focus};
    transform: translateY(0px);
  }
`;

export default StyledButton;
