import React, { ReactNode } from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Normal = (): ReactNode => (
  <section style={{ paddingRight: "4%", paddingLeft: "4%" }}>
    <Button variant="primary" onClick={action("clicked")}>
      Hello Button
    </Button>
  </section>
);

// export const WithStyle = (): ReactNode => (
//   <Button style={{ background: "red", color: "#fff" }}>Red Text</Button>
// );

export const Disabled = (): ReactNode => (
  <section style={{ paddingRight: "4%", paddingLeft: "4%" }}>
    <Button disabled>Disabled Button</Button>
  </section>
);

export const Error = (): ReactNode => (
  <section style={{ paddingRight: "4%", paddingLeft: "4%" }}>
    <Button variant="error">Disabled Button</Button>
  </section>
);

export const Success = (): ReactNode => (
  <section style={{ paddingRight: "4%", paddingLeft: "4%" }}>
    <Button variant="success" variantStyle="outline">
      Disabled Button
    </Button>
  </section>
);

export const Warning = (): ReactNode => (
  <section style={{ paddingRight: "4%", paddingLeft: "4%" }}>
    <Button variant="warning">Disabled Button</Button>
  </section>
);
