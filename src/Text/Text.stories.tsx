import React from "react";

import Heading from "../Heading/Heading";
import Text from "./Text";
import Button from "../Button/Button";

export default {
  title: "Text",
  component: Text,
};

export const ParagraphText = (): JSX.Element => (
  <section style={{ paddingLeft: "3%", paddingRight: "3%" }}>
    <Heading level="h1" size="display1" centered>
      Heading Text
    </Heading>
    <Text size="heading4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
      laudantium asperiores hic vel deserunt, tenetur voluptatum libero cum
      iste, harum dicta maxime. Labore aliquid commodi veniam nulla sit nemo
      officiis.
    </Text>
    <Button>Button Text</Button>
    <Button variant="success">Button Text</Button>
    <Button variant="warning">Button Text</Button>
    <Button variant="error">Button Text</Button>
    <Button variant="error" disabled>
      Button Text
    </Button>
  </section>
);
