import React, { DOMAttributes, FC } from "react";

export type HeadingLevelProps = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSizeProps = "normal";

export interface HeadingProps extends DOMAttributes<HTMLHeadingElement> {
  level: HeadingLevelProps;
  responsive?: boolean;
  size?: string;
  centered?: boolean;
}

const Heading: FC<HeadingProps> = (props) => {
  const { level, children } = props;
  const HeadingLevel: HeadingLevelProps = level;

  return <HeadingLevel {...props}>{children}</HeadingLevel>;
};

Heading.defaultProps = {
  responsive: true,
  size: "normal",
  centered: false,
};

Heading.displayName = "Heading";

export default Heading;
