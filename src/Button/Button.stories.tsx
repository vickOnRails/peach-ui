import React, { ReactNode } from "react";
// import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Basic = (): ReactNode => <Button>Hello Button</Button>;

export const Variants = (): ReactNode => (
  <section style={{ margin: "1em" }}>
    <Button variant="primary">Disabled Button</Button>
    <Button variant="success">Disabled Button</Button>
    <Button variant="error">Disabled Button</Button>
    <Button variant="warning">Disabled Button</Button>
    <Button disabled>Disabled Button</Button>
  </section>
);

export const VariantStyles = (): ReactNode => (
  <section style={{ margin: "1em" }}>
    <Button variant="success" variantStyle="outline">
      Variant Styles
    </Button>
    <Button variant="error" variantStyle="ghost">
      Variant Styles
    </Button>
    <Button variant="success" variantStyle="filled">
      Variant Styles
    </Button>
  </section>
);

export const Loading = (): ReactNode => (
  <>
    <Button loading> Content is Loading</Button>
    <Button variant="error" loading>
      Content is Loading
    </Button>
    <Button variant="success" loading>
      Content is Loading
    </Button>
    <Button variant="warning" loading>
      Content is Loading
    </Button>
  </>
);
