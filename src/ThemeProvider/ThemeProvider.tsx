import React, { ReactNode, useContext, FC } from "react";
import { ThemeContext } from "@emotion/core";

export interface ThemeProviderProps {
  children: ReactNode;
  theme: object;
}

/**
 *
 * @param theme - Theme passed into the ThemeProvider
 * @param children - The rest of the app. All components under this tree have access to theme values in their props
 *
 * @returns React Element
 */

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { theme, children } = props;
  const themeContext = useContext(ThemeContext);
  const combinedTheme = { ...theme, ...themeContext };

  return (
    <ThemeContext.Provider value={combinedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = "ThemeProvider";

export default ThemeProvider;
