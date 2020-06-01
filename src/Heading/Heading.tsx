import React, { DOMAttributes, FC } from "react";
import styled from "@emotion/styled";

import theme from "../Theme";
import { Sizes, HeadingLevelProps } from "../util/types";
import getFontSize from "../util/getFontSize";

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
  size?: Sizes;

  /**
   *  If set to true, will center the text
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
  fontSize: getFontSize(props.size, props.level),
  fontWeight: theme.typography.sizes[props.as as HeadingLevelProps].fontWeight,
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
  centered: false,
};

Heading.displayName = "Heading";

export default Heading;
