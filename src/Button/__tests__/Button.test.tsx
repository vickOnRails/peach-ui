import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Button";
import theme from "../../Theme";

describe("Button", () => {
  test("Responds to click event", () => {
    let count = 0;
    const buttonText = "Click Me";
    const incrementCount = (): void => {
      count += 1;
    };

    const { getByText } = render(
      <Button onClick={incrementCount}>{buttonText}</Button>
    );
    const node = getByText(buttonText);
    fireEvent.click(node);
    expect(count).toEqual(1);
  });

  test("Cannot be clicked while disabled", () => {
    // get the container
    let count = 0;
    const incrementCount = (): void => {
      count += 5;
    };

    const { getByText } = render(
      <Button disabled onClick={incrementCount}>
        Click Me
      </Button>
    );

    const node = getByText("Click Me");
    fireEvent.click(node);
    expect(count).toEqual(0);
  });

  test("Renders appropriate variant", () => {
    const buttonText = "Click Me";
    const variant = "primary";
    render(<Button variant={variant}>{buttonText}</Button>);

    const node = screen.getByText(buttonText);
    expect(node).toHaveStyle({
      "background-color": theme.variants[variant].color,
    });
  });

  test("Unneeded properties aren't passed into Button", () => {
    const { getByTestId } = render(
      <div className="container" data-testid="button-container">
        <button type="submit" className="css-fxq2iz">
          Click Me
        </button>
        <Button variant="primary" variantStyle="outline" block size="medium">
          Click Me
        </Button>
      </div>
    );

    const buttonsContainer = getByTestId("button-container");
    const vanillaButton = buttonsContainer.querySelectorAll("button")[0];
    const renderedButton = buttonsContainer.querySelectorAll("button")[1];

    expect(vanillaButton).toEqual(renderedButton);
  });
});
