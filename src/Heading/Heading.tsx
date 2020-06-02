import React, { FC, HTMLAttributes } from "react";
import styled from "@emotion/styled";

import theme from "../Theme";
import { Sizes, HeadingLevelProps } from "../util/types";
import getFontSize from "../util/getFontSize";

export type HeadingSizeProps = "normal";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   *  level props defines types for the possible types of headings {@see HeadingLevelProps}
   */
  level: HeadingLevelProps;

  /**
   *  Sets the responsiveness of the heading. Headings might look cool on a 1920
   *  but awful on mobile. The proportion is reduced based on the screen size
   *  FIXME: This doesn't work yet
   */
  responsive?: boolean;

  /**
   * The desired size of the Heading {@see Sizes}
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

const StyledHeading = styled<HeadingLevelProps>("h1", {
  /**
   * Prevent emotion from passing invalid props to native HTML element
   */
  shouldForwardProp: (prop: string) =>
    !["as", "responsive", "size", "centered"].includes(prop),
  // FIXME: Remove any when I find the right type containing the as props
})((props: HeadingProps & { as: any }) => ({
  color: theme.colors.black,
  textAlign: props.centered ? "center" : "left",
  fontSize: getFontSize(props.level, props.size),
  fontWeight: theme.typography.sizes[props.as as HeadingLevelProps].fontWeight,
}));

const Heading: FC<HeadingProps> = (props) => {
  const { children, level } = props;
  return (
    <StyledHeading {...props} as={level}>
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
