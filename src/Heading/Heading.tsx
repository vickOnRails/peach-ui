import React, { DOMAttributes, FC } from "react";
import styled from "@emotion/styled";

export type HeadingLevelProps = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSizeProps = "normal";

export interface HeadingProps extends DOMAttributes<HTMLHeadingElement> {
  /**
   *  level props defines types for the possible types of headings
   */
  level: HeadingLevelProps;

  /**
   *  Sets the responsiveness of the heading. Headings might look cool on a 1920
   *  but awful on mobile. The proportion is reduced based on the screen size
   *  FIXME: This doesn't work yet
   */
  responsive?: boolean;

  /**
   * Size of the button
   * FIXME: This doesn't work yet
   * Can either be "large", "small" , "medium" or CSS rem, em, px etc
   */
  size?: string;

  /**
   *  Determines if the heading is centered or not
   *  FIXME: This doesn't work yet
   */
  centered?: boolean;
}

const Heading: FC<HeadingProps> = (props) => {
  const { level, size, centered, responsive, children, ...rest } = props;
  const HeadingLevel = level;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const StyledHeading = styled(HeadingLevel)<any>`
    background: red;
  `;

  return <StyledHeading {...rest}>{children}</StyledHeading>;
};

Heading.defaultProps = {
  responsive: true,
  size: "normal",
  centered: false,
};

Heading.displayName = "Heading";

export default Heading;
