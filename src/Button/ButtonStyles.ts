import styled from "@emotion/styled";
import theme from "../Theme";
import getVariantColor from "../util/getVariantColor";
import { ButtonProps } from "./types/ButtonTypes";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props): string =>
    props.disabled
      ? theme.colors.black.lighter
      : getVariantColor(props.variant)};
  border: none;
  color: ${(): string => theme.colors.white};
`;

export default StyledButton;
