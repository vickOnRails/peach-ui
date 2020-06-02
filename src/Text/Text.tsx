import React, { FC, HTMLAttributes } from "react";
import { Sizes } from "../util/types";
import { getFontSizeText } from "../util/getFontSize";
import styled from "../ThemeProvider/styled";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Sizes;
  centered?: boolean;
}

const StyledText = styled.p<TextProps>`
  font-size: ${({ size }: TextProps): string => getFontSizeText(size)};
  text-align: ${({ centered }): string => (centered ? "center" : "left")};
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
