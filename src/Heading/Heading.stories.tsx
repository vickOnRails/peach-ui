import React from "react";

import Heading from "./Heading";
import Text from "../Text/Text";
import Divider from "../Divider/Divider";

export default {
  title: "Heading",
  component: Heading,
};

export const Typography = (): JSX.Element => {
  return (
    // Temporary padding till I implement Container component
    <section style={{ paddingRight: "3%", paddingLeft: "3%" }}>
      <article>
        <span>Display 1 (5.9em)</span>
        <Heading level="h1" size="display1">
          Display 1
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Display 2 (4.75em)</span>
        <Heading level="h1" size="display2">
          Display 2
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Display 3 (3.8em)</span>
        <Heading level="h1" size="display3">
          Display 3
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 1 (2.56em)</span>
        <Heading level="h1" size="heading1">
          Heading 1
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 2 (2.44em)</span>
        <Heading level="h2" size="heading2">
          Heading 2
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 3 (1.93em)</span>
        <Heading level="h3" size="heading3">
          Heading 3
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 4</span>
        <Heading level="h4" size="heading4">
          Heading 4
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 5 (1.56em)</span>
        <Heading level="h5" size="heading5">
          Heading 5
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 6 (1em)</span>
        <Heading level="h6" size="heading6">
          Heading 6
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Body (1em)</span>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, soluta. Expedita, esse dolorem. Ipsa sint tempore
          excepturi temporibus consequatur nostrum deserunt soluta sunt quia.
          Illum, nostrum. Expedita nulla aliquid reiciendis?
        </Text>
      </article>

      <Divider />

      <article>
        <span>Small Text (0.87em)</span>
        <Text size="small">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, soluta. Expedita, esse dolorem. Ipsa sint tempore
          excepturi temporibus consequatur nostrum deserunt soluta sunt quia.
          Illum, nostrum. Expedita nulla aliquid reiciendis?
        </Text>
      </article>

      <Divider />

      <article>
        <span>Caption (0.75em)</span>
        <Text size="caption">Lorem, ipsum dolor</Text>
      </article>
    </section>
  );
};
