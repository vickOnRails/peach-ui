import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";
import theme from "../Theme";
import { ButtonProps } from "./types/Button.types";
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

const StyledButtonDefault = ({
  variant,
  block,
}: ButtonProps): SerializedStyles => css`
  background-color: ${getDefaultVariant(variant)};
  color: ${variant === "warning"
    ? theme.variants[variant].text
    : theme.colors.white};

  border: none;
  padding: ${`${theme.spaces.xs} ${theme.spaces.md}`};
  transition: all 0.25s;
  width: ${block ? "100%" : "auto"};
  font-size: 1em;

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
    border: ${`1px solid ${theme.colors.grey[300]}`};

    &:hover {
      background: inherit;
      border: ${`1px solid ${getDefaultVariant(variant)}`};
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

const StyledButton = styled.button<ButtonProps>`
  ${StyledButtonDefault};
  ${StyledButtonOutline};
  ${StyledButtonGhost};
  ${StyledButtonLoading};
  ${StyledButtonDisabled};
`;

export default StyledButton;
