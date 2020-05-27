import React, { DOMAttributes, FC } from "react";
import styled from "@emotion/styled";

import theme from "../Theme";

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

/**
 * @param level - Specifies the type of Heading (h1, h2, h3, h4, h5, h6)
 * @param centered - If set to `true` centers the heading
 * @param responsive - If set to `true`, heading text will scale according to the resolution
 *
 * The `as` property of @emotion does not let StyledHeading render the default `h1`
 *  FIXME:  Replace `any` with the appropriate type for the styled function
 */

const StyledHeading = styled<any>("h1", {
  /**
   * Prevent emotion from passing invalid props to native HTML element
   */
  shouldForwardProp: (props) =>
    !["as", "responsive", "size", "centered"].includes(props),
})((props) => ({
  color: theme.colors.black,
  textAlign: props.centered ? "center" : "left",
}));

const Heading: FC<HeadingProps> = (props) => {
  const { children, level } = props;
  return (
    <StyledHeading as={level} {...props}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  responsive: true,
  size: "normal",
  centered: false,
};

Heading.displayName = "Heading";

export default Heading;
