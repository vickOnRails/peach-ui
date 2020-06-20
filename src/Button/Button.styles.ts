import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";
import theme from "../Theme";
import {
  ButtonProps,
  ButtonSizeProp,
  BordersProps,
} from "./types/Button.types";
import { VariantProp } from "../Theme/variants";

/**
 * Returns color for matching variant
 * @param variant - Variant value @see VariantProp
 */

const getDefaultVariant = (
  variant: VariantProp | undefined,
  mode?: "color" | "hover"
): string => {
  if (!mode)
    return variant
      ? theme.variants[variant].color
      : theme.variants.primary.color;

  return variant && mode
    ? theme.variants[variant][mode]
    : theme.variants.primary.color;
};

const getButtonSize = (size: ButtonSizeProp | undefined): string => {
  if (size === undefined || size === "medium")
    return `${theme.spaces.xs} ${theme.spaces.md}`;

  if (size === "small") return `${theme.spaces.xxs} ${theme.spaces.sm}`;

  return `${theme.spaces.sm} ${theme.spaces.lg}`;
};

// Move to /util if another component wants it
const getBorderRadius = (borders: BordersProps | undefined): string => {
  if (borders === undefined) return theme.radius.squared;

  return theme.radius[borders];
};

const StyledButtonDefault = ({
  variant,
  size,
  borders,
  loading,
  block,
}: ButtonProps): SerializedStyles => css`
  background-color: ${getDefaultVariant(variant)};
  color: ${
    variant === "warning" ? theme.variants[variant].text : theme.colors.white
  };

  /* line-height: ${loading ? "0" : "inherit"}; */

  border: none;
  padding: ${getButtonSize(size)};
  transition: all 0.25s;
  width: ${block ? "100%" : "auto"};
  font-size: ${
    size === "small"
      ? theme.typography.sizes.small.fontSize
      : theme.typography.sizes.body.fontSize
  };

  border-radius: ${getBorderRadius(borders)};

  &:hover {
    background-color: ${getDefaultVariant(variant, "hover")};
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.resting};
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.focus};
  }
`;

const StyledButtonOutline = ({
  variantStyle,
  variant,
}: ButtonProps): SerializedStyles | false =>
  variantStyle === "outline" &&
  css`
    background: inherit;
    color: ${getDefaultVariant(variant)};
    border: ${`1px solid ${getDefaultVariant(variant, "color")}`};

    &:hover {
      color: ${theme.colors.white};
    }
  `;

const StyledButtonGhost = ({
  variantStyle,
  variant,
}: ButtonProps): SerializedStyles | false =>
  variantStyle === "ghost" &&
  css`
    background: inherit;
    color: ${getDefaultVariant(variant)};
    border: ${`2px solid ${theme.colors.grey[300]}`};

    &:hover {
      background: inherit;
      border: ${`2px solid ${getDefaultVariant(variant)}`};
      box-shadow: none;
    }

    &:active,
    &:focus {
      box-shadow: ${theme.shadows.focus};
    }
  `;

const StyledButtonLoading = ({
  loading,
  variant,
}: ButtonProps): SerializedStyles | false | undefined =>
  loading &&
  css`
    background-color: ${variant
      ? theme.variants[variant].hover
      : theme.variants.primary.hover};

    &:hover,
    &:active,
    &:focus {
      box-shadow: none;
      transform: none;
      cursor: initial;
      background-color: ${variant
        ? theme.variants[variant].hover
        : theme.variants.primary.hover};
    }
  `;

const StyledButtonDisabled = ({
  disabled,
}: ButtonProps): SerializedStyles | false | undefined =>
  disabled &&
  css`
    background-color: ${theme.colors.grey[100]};
    color: ${theme.colors.grey[600]};
    border: ${`1px solid ${theme.colors.grey[50]}`};
    cursor: not-allowed;
    box-shadow: ${theme.shadows.disabled};

    &:hover {
      background-color: ${theme.colors.grey[100]};
      transform: none;
      box-shadow: ${theme.shadows.disabled};
    }
  `;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button<ButtonProps>`
  ${StyledButtonDefault};
  ${StyledButtonOutline};
  ${StyledButtonGhost};
  ${StyledButtonLoading};
  ${StyledButtonDisabled};
`;

export default StyledButton;
