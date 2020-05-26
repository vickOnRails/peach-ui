import React, { FC } from "react";

import { addDecorator } from "@storybook/react";

import ThemeProvider, {
  ThemeProviderProps,
} from "../src/ThemeProvider/ThemeProvider";

// App theme
const theme = {
  color: "brown",
};

export const Provider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

// Wrap all stories in a themeContext
addDecorator((StoryFn: Function) => (
  <Provider theme={theme}>{StoryFn()}</Provider>
));
