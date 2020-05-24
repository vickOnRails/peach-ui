import React from "react";
// import { action } from "@storybook/react";
import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
};

export const Heading1 = (): JSX.Element => (
  <Heading level="h1">Heading 1</Heading>
);
export const Heading2 = (): JSX.Element => (
  <Heading level="h2">Heading 1</Heading>
);
export const Heading3 = (): JSX.Element => (
  <Heading level="h3">Heading 1</Heading>
);
export const Heading4 = (): JSX.Element => (
  <Heading level="h4">Heading 1</Heading>
);
export const Heading5 = (): JSX.Element => (
  <Heading level="h5">Heading 1</Heading>
);
export const Heading6 = (): JSX.Element => (
  <Heading level="h6">Heading 1</Heading>
);
