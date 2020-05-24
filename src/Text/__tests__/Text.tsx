import React, { DOMAttributes, FC } from "react";

type TextProps = DOMAttributes<HTMLParagraphElement>;

const Text: FC<TextProps> = (props) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Text;
