import React, { ReactNode } from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Text = (): ReactNode => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const WithStyle = (): ReactNode => (
  <Button style={{ background: "red", color: "#fff" }}>Red Text</Button>
);

export const Disabled = (): ReactNode => (
  <Button disabled>Disabled Button</Button>
);
