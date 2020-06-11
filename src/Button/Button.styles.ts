import styled from "@emotion/styled";
import theme from "../Theme";
import getVariantColor from "../util/getVariantColor";
import { ButtonProps } from "./types/Button.types";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props): string =>
    props.disabled
      ? theme.colors.black.lighter
      : getVariantColor(props.variant)};
  border: none;
  color: ${(): string => theme.colors.white};
  padding: ${(): string => `${theme.spaces.xs} ${theme.spaces.md}`};
  font-size: ${(): string => theme.typography.sizes.body.fontSize};
  border-radius: ${(): string => theme.radius.xs};
  transition: background 0.25s;

  /* Hover styles */
  :hover {
    cursor: ${(props): string => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${(props): string =>
      props.disabled ? "" : theme.colors.blue.dark};
  }
`;

export default StyledButton;
