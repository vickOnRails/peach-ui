import React, { DOMAttributes, FC } from "react";

type TextProps = DOMAttributes<HTMLParagraphElement>;

const Text: FC<TextProps> = (props) => {
  const { children } = props;
  return <p>{children}</p>;
};

Text.displayName = "Text";

export default Text;
