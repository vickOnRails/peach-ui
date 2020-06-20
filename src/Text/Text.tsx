import React, { FC } from "react";
import { TextProps } from "./types/Text.types";
import { StyledText } from "./Text.styles";

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
