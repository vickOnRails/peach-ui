const colors = {
  blue: {
    base: "#006CFF",
    dark: "#0042CB",
    light: "#6A99FF",
    lighter: "#D6E7FF",
    lightest: "#F2F8FF",
  },
  yellow: {
    base: "#FFC000",
    dark: "#C79000",
    light: "#FFF24E",
    lighter: "#FFF5D6",
    lightest: "#FFFCF2",
  },
  red: {
    base: "#FF003C",
    dark: "#C30016",
    light: "#FF5B67",
    lighter: "#FFD6E0",
    lightest: "#FFF2F5",
  },
  green: {
    base: "#63AD0E",
    dark: "#2D7D00",
    light: "#96DF4B",
    lighter: "#E0F2CE",
    lightest: "#F9FFF2",
  },
  black: {
    base: "#212121",
    dark: "",
    light: "#484848",
    lighter: "#C7C7C7",
    lightest: "#FAFAFA",
  },
};

export type ColorsProps = typeof colors;
export default colors;
