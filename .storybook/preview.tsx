import React, { FC } from "react";
import { addDecorator } from "@storybook/react";

import { CSSReset } from "../src/CSSReset";
import ThemeProvider, {
  ThemeProviderProps,
} from "../src/ThemeProvider/ThemeProvider";
import styled from "@emotion/styled";

export const Provider = (props) => {
  const { children } = props;
  return (
    <>
      <CSSReset />
      {children}
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
    <Provider>{StoryFn()}</Provider>
  </StorybookWrapper>
));
