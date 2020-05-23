import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("Button Renders Properly", () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });
});
