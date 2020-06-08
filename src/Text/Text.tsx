import React, { FC, HTMLAttributes } from "react";
import { Sizes } from "../util/types";
import { getFontSizeText } from "../util/getFontSize";
import styled from "../ThemeProvider/styled";

/**
 *  @param size - Desired size of the text @see {Sizes}
 *  @param centered - Text will be centered when set to true
 */
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Sizes;
  centered?: boolean;
}

// FIXME: Function currently returns only 2 values of text-transform.
// Return other values in the future
const getTextTransform = (size: Sizes | undefined): string => {
  switch (size) {
    case "caption":
      return "uppercase";

    default:
      return "inherit";
  }
};

const StyledText = styled.p<TextProps>`
  font-size: ${({ size }: TextProps): string => getFontSizeText(size)};
  text-align: ${({ centered }): string => (centered ? "center" : "inherit")};
  text-transform: ${({ size }: TextProps): string => getTextTransform(size)};
`;

const Text: FC<TextProps> = (props) => {
  const { size = "body", centered, children, ...rest } = props;
  return (
    <StyledText size={size} centered={centered} {...rest}>
      {children}
    </StyledText>
  );
};

Text.displayName = "Text";

export default Text;
