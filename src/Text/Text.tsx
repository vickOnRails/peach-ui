import React, { FC, HTMLAttributes } from "react";
import { Sizes } from "../util/types";
import { getFontSizeText } from "../util/getFontSize";
import styled from "../ThemeProvider/styled";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Sizes;
}

const StyledText = styled.p<TextProps>`
  font-size: ${({ size }: TextProps): string => getFontSizeText(size)};
`;

const Text: FC<TextProps> = (props) => {
  const { size = "body", children, ...rest } = props;
  return (
    <StyledText size={size} {...rest}>
      {children}
    </StyledText>
  );
};

Text.displayName = "Text";

export default Text;
