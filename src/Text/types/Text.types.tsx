import { HTMLAttributes } from "react";

import { Sizes } from "../../util/types";

/**
 *  @param size - Desired size of the text @see {Sizes}
 *  @param centered - Text will be centered when set to true
 */
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Sizes;
  centered?: boolean;
}
