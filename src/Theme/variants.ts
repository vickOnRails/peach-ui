import colors from "./colors";

const variants = {
  primary: {
    color: colors.blue.base,
  },
  secondary: {
    color: colors.blue.base,
  },
  error: {
    color: colors.red.base,
  },
  success: {
    color: colors.green.base,
  },
  info: {
    color: colors.blue.base,
  },
};

// Maybe find a better name for this type as it might collide with Variantprops
export type VariantProp =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "info";

export type VariantsProps = typeof variants;
export default variants;
