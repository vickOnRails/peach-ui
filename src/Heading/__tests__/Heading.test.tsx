import React from "react";
import { render, screen } from "@testing-library/react";

import Heading from "../Heading";

describe("Heading", () => {
  // This test should be suited to accommodate other html content inside of the Heading Element
  test("Renders appropriate text content", () => {
    const testText = "Hello World";
    render(<Heading level="h1">{testText}</Heading>);
    expect(screen.queryByText(testText)).not.toBeNull();
  });

  test("Renders appropriate heading levels", () => {
    const headingLevel = "h2";
    const headingText = "Hello World";
    const { container } = render(
      <Heading level={headingLevel}>{headingText}</Heading>
    );
    expect(container.querySelector(headingLevel)).toBeInTheDocument();
  });
});
