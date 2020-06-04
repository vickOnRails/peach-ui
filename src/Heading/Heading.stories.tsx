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
        <span>Display 1</span>
        <Heading level="h1" size="display1">
          Display 1
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Display 2</span>
        <Heading level="h1" size="display2">
          Display 2
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Display 3</span>
        <Heading level="h1" size="display3">
          Display 3
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 1</span>
        <Heading level="h1" size="heading1">
          Heading 1
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 2</span>
        <Heading level="h2" size="heading2">
          Heading 2
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 3</span>
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
        <span>Heading 5</span>
        <Heading level="h5" size="heading5">
          Heading 5
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Heading 6</span>
        <Heading level="h6" size="heading6">
          Heading 6
        </Heading>
      </article>

      <Divider />

      <article>
        <span>Body</span>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, soluta. Expedita, esse dolorem. Ipsa sint tempore
          excepturi temporibus consequatur nostrum deserunt soluta sunt quia.
          Illum, nostrum. Expedita nulla aliquid reiciendis?
        </Text>
      </article>

      <Divider />

      <article>
        <span>Small Text</span>
        <Text size="small">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, soluta. Expedita, esse dolorem. Ipsa sint tempore
          excepturi temporibus consequatur nostrum deserunt soluta sunt quia.
          Illum, nostrum. Expedita nulla aliquid reiciendis?
        </Text>
      </article>

      <Divider />

      <article>
        <span>Caption</span>
        <Text size="caption">Lorem, ipsum dolor</Text>
      </article>
    </section>
  );
};
