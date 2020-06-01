import { Sizes, HeadingLevelProps } from "./types";
import theme from "../Theme";

/**
 * Returns the appropriate fontSize to the Heading component
 * @param size - Desired size of the Heading {@see Sizes}
 * @param level - Desired level of the heading {@see HeadingLevelProps}
 */
const getFontSize = (size: Sizes, level: HeadingLevelProps): string => {
  if (typeof size === "number") return `${size}px`;

  /**
   *  Skip if size props is not passed
   */
  if (size) return theme.typography.sizes[size].fontSize;

  return theme.typography.sizes[level].fontSize;
};

export default getFontSize;
