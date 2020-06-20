import styled from "@emotion/styled";

import theme from "../Theme";
import { HeadingLevelProps } from "../util/types";
import { HeadingProps } from "./types/Heading.types";
import { getHeadingFontSize } from "../util/getFontSize";
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
  fontSize: getHeadingFontSize(props.level, props.size),
  fontWeight: theme.typography.sizes[props.as as HeadingLevelProps].fontWeight,
}));

export default StyledHeading;
