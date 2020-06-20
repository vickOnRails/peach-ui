import styled from "@emotion/styled";
import { Sizes } from "../util/types";
import { TextProps } from "./types/Text.types";
import { getFontSizeText } from "../util/getFontSize";

// FIXME: Function currently returns only 2 values of text-transform.
// Return other values in the future
export const getTextTransform = (size: Sizes | undefined): string => {
  switch (size) {
    case "caption":
      return "uppercase";

    default:
      return "inherit";
  }
};

export const StyledText = styled.p<TextProps>`
  font-size: ${({ size }: TextProps): string => getFontSizeText(size)};
  text-align: ${({ centered }): string => (centered ? "center" : "inherit")};
  text-transform: ${({ size }: TextProps): string => getTextTransform(size)};
`;
