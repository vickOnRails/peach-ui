import React from "react";
import { render } from "@testing-library/react";

import Heading from "../Heading";
import theme from "../../Theme";

describe("Heading", () => {
  // This test should be suited to accommodate other html content inside of the Heading Element
  test("Renders appropriate text content", () => {
    const headingContent = "Hello World";
    const { getByText } = render(
      <Heading level="h1">{headingContent}</Heading>
    );

    const node = getByText(headingContent);

    expect(node.textContent).toEqual(headingContent);
  });

  test("Renders appropriate heading levels", () => {
    const headingLevel = "h1";
    const size = "heading2";
    const headingText = "Hello World";
    const { getByText } = render(
      <Heading level={headingLevel} size={size}>
        {headingText}
      </Heading>
    );

    const node = getByText(headingText);

    expect(node.nodeName).toBe("H1");
    expect(node).toHaveStyle({
      fontSize: theme.typography.sizes[size].fontSize,
    });
  });
});
