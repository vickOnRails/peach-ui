import React, { FC } from "react";
import StyledHeading from "./Heading.styles";
import { HeadingProps } from "./types/Heading.types";

const Heading: FC<HeadingProps> = (props) => {
  const { children, level } = props;
  return (
    <StyledHeading {...props} as={level}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  responsive: true,
  centered: false,
};

Heading.displayName = "Heading";

export default Heading;
