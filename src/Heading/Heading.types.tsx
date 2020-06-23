import { HTMLAttributes } from "react";
import { Sizes, HeadingLevelProps } from "../util/types";

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
