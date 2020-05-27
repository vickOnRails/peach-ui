import React from "react";

import Heading from "./Heading";
import Text from "../Text/Text";

export default {
  title: "Heading",
  component: Heading,
};

export const Heading1 = (): JSX.Element => (
  <>
    <Heading level="h1">Heading 1</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quo
      sunt enim, aperiam quidem quasi. Repellat soluta delectus optio
      repudiandae officia, eius magni odit!
    </Text>
  </>
);

export const Heading2 = (): JSX.Element => (
  <>
    <Heading level="h2">Heading 2</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quo
      sunt enim, aperiam quidem quasi. Repellat soluta delectus optio
      repudiandae officia, eius magni odit!
    </Text>
  </>
);

export const Heading3 = (): JSX.Element => (
  <>
    <Heading level="h3">Heading 3</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quo
      sunt enim, aperiam quidem quasi. Repellat soluta delectus optio
      repudiandae officia, eius magni odit!
    </Text>
  </>
);

export const Heading4 = (): JSX.Element => (
  <>
    <Heading level="h4">Heading 4</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quo
      sunt enim, aperiam quidem quasi. Repellat soluta delectus optio
      repudiandae officia, eius magni odit!
    </Text>
  </>
);

export const Heading5 = (): JSX.Element => (
  <>
    <Heading centered level="h5">
      Heading 5
    </Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quo
      sunt enim, aperiam quidem quasi. Repellat soluta delectus optio
      repudiandae officia, eius magni odit!
    </Text>
  </>
);

export const Heading6 = (): JSX.Element => (
  <>
    <Heading level="h6">Heading 6</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quo
      sunt enim, aperiam quidem quasi. Repellat soluta delectus optio
      repudiandae officia, eius magni odit!
    </Text>
  </>
);
