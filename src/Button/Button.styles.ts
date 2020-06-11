import styled from "@emotion/styled";
import theme from "../Theme";
import { getVariantColor, getVariantHoverColor } from "../util/getVariantColor";
import { ButtonProps } from "./types/Button.types";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props): string =>
    props.disabled ? theme.colors.grey[200] : getVariantColor(props.variant)};
  border: none;
  color: ${(props): string =>
    props.disabled ? theme.colors.black : theme.colors.white};
  padding: ${(): string => `${theme.spaces.xs} ${theme.spaces.md}`};
  font-size: ${(): string => theme.typography.sizes.body.fontSize};
  border-radius: ${(): string => theme.radius.xs};
  transition: background 0.25s;
  min-width: 2.5em;
  box-shadow: ${(props): string =>
    props.disabled ? theme.shadows.disabled : theme.shadows.resting};

  /* Hover styles */
  :hover {
    cursor: ${(props): string => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${(props): string =>
      props.disabled
        ? theme.colors.grey[200]
        : getVariantHoverColor(props.variant)};
  }

  :focus,
  :active {
    box-shadow: none;
    outline: none;
    box-shadow: ${(): string => theme.shadows.focus};
  }
`;

export default StyledButton;
