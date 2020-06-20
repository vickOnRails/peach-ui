import React, { FC } from "react";
import { addDecorator } from "@storybook/react";

import { CSSReset } from "../src/CSSReset";
import ThemeProvider, {
  ThemeProviderProps,
} from "../src/ThemeProvider/ThemeProvider";
import styled from "@emotion/styled";

// App theme
const theme = {
  color: "brown",
};

export const Provider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  return (
    <>
      <CSSReset />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

const StorybookWrapper = ({ children }) => (
  <StyledStorybookWrapper>{children}</StyledStorybookWrapper>
);

const StyledStorybookWrapper = styled.section`
  max-width: 60em;
  padding: 1em 0.5em;
  margin: 0 auto;
`;

// Wrap all stories in a themeContext
addDecorator((StoryFn: Function) => (
  <StorybookWrapper>
    <Provider theme={theme}>{StoryFn()}</Provider>
  </StorybookWrapper>
));
