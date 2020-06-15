import React, { ReactNode } from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Basic = (): ReactNode => <Button>Hello Button</Button>;

export const Sizes = (): ReactNode => (
  <>
    <Button size="small" style={{ margin: ".5em" }}>
      Small Button
    </Button>
    <Button size="medium" style={{ margin: ".5em" }}>
      Medium Button
    </Button>
    <Button size="large" style={{ margin: ".5em" }}>
      Large Button
    </Button>
  </>
);

export const Variants = (): ReactNode => (
  <>
    <Button variant="primary" style={{ margin: ".5em" }}>
      Primary Button
    </Button>
    <Button variant="success" style={{ margin: ".5em" }}>
      Success Button
    </Button>
    <Button variant="error" style={{ margin: ".5em" }}>
      Error Button
    </Button>
    <Button variant="warning" style={{ margin: ".5em" }}>
      Warning Button
    </Button>
    <Button disabled style={{ margin: ".5em" }}>
      Disabled Button
    </Button>
  </>
);

export const VariantStyles = (): ReactNode => (
  <>
    <Button variantStyle="ghost" style={{ margin: ".5em" }}>
      Filled Button
    </Button>
    <Button variantStyle="outline" style={{ margin: ".5em" }}>
      Outline Button
    </Button>
    <Button variantStyle="filled" style={{ margin: ".5em" }}>
      Ghost Button
    </Button>
  </>
);

export const BorderRadius = (): ReactNode => (
  <>
    <Button borders="squared" style={{ margin: ".5em" }}>
      Squared Button
    </Button>
    <Button borders="rounded" style={{ margin: ".5em" }}>
      Rounded Button
    </Button>
    <Button borders="circled" variantStyle="ghost" style={{ margin: ".5em" }}>
      Circled Button
    </Button>
  </>
);

export const Loading = (): ReactNode => (
  <>
    <Button loading borders="rounded" style={{ margin: ".5em" }}>
      Content is Loading
    </Button>
    <Button variant="error" loading style={{ margin: ".5em" }}>
      Content is Loading
    </Button>
    <Button variant="success" loading style={{ margin: ".5em" }}>
      Content is Loading
    </Button>
    <Button variant="warning" loading style={{ margin: ".5em" }}>
      Content is Loading
    </Button>
  </>
);

export const Block = (): ReactNode => (
  <>
    <Button block style={{ marginBottom: ".5em" }}>
      Content is Loading
    </Button>
    <Button variant="error" block style={{ marginBottom: ".5em" }}>
      Content is Loading
    </Button>
    <Button variant="success" block style={{ marginBottom: ".5em" }}>
      Content is Loading
    </Button>
    <Button variant="warning" block style={{ marginBottom: ".5em" }}>
      Content is Loading
    </Button>
  </>
);
