import React from "react";
import { render } from "@testing-library/react";

import Text from "../Text";
import theme from "../../Theme";

describe("Text", () => {
  test("It renders correct content", () => {
    const textContent = "Hello World";

    const { getByText } = render(<Text>{textContent}</Text>);
    const node = getByText(textContent);

    expect(node.textContent).toEqual(textContent);
  });

  test("Renders appropriate size", () => {
    const textContent = "Text Content";
    const size = "display1";
    const { getByText } = render(<Text size={size}>{textContent}</Text>);

    const node = getByText(textContent);
    expect(node).toHaveStyle({
      fontSize: theme.typography.sizes[size].fontSize,
    });
  });

  test("Renders with appropriate properties", () => {
    const textContent = "Hello World";

    const { getByText } = render(
      <Text hidden style={{ marginBottom: "0" }}>
        {textContent}
      </Text>
    );
    const node = getByText(textContent);

    expect(node).toHaveAttribute("hidden");
    expect(node).toHaveAttribute("style");
  });
});
