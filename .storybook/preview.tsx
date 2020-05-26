import React from "react";
import ThemeProvider from "../src/ThemeProvider/ThemeProvider";
import { addDecorator } from "@storybook/react";

export const Provider = ({ children }) => (
  <>
    <ThemeProvider theme={{}}>
      <p>SomethingLight</p>
      {children}
    </ThemeProvider>
  </>
);

addDecorator((StoryFn: Function) => <Provider>{StoryFn()}</Provider>);
