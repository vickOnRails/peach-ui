import colors from "./colors";

const variants = {
  primary: {
    color: colors.blue[700],
    hover: colors.blue[500],
  },
  secondary: {
    color: colors.blue[700],
    hover: colors.blue[500],
  },
  error: {
    color: colors.red[700],
    hover: colors.red[500],
  },
  success: {
    color: colors.green[700],
    hover: colors.green[500],
  },
  info: {
    color: colors.blue[700],
    hover: colors.blue[500],
  },
  warning: {
    color: colors.yellow[800],
    hover: colors.yellow[900],
    text: colors.grey[900],
  },
};

// Maybe find a better name for this type as it might collide with Variantprops
export type VariantProp =
  | "primary"
  | "secondary"
  | "warning"
  | "error"
  | "success"
  | "info";

export type VariantsProps = typeof variants;
export default variants;
