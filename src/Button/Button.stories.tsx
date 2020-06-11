import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import { VariantProp } from "../Theme/variants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  htmlType?: "button" | "submit" | "reset";
  variant?: VariantProp;
}

export default {
  title: "Button",
  component: Button,
};

export const Normal = (): ReactNode => (
  <Button variant="primary" onClick={action("clicked")}>
    Hello Button
  </Button>
);

// export const WithStyle = (): ReactNode => (
//   <Button style={{ background: "red", color: "#fff" }}>Red Text</Button>
// );

export const Disabled = (): ReactNode => (
  <Button disabled>Disabled Button</Button>
);
