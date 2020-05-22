import React, { FC, DOMAttributes } from "react";
import Button from "../Button/Button";

type FormProps = DOMAttributes<HTMLFormElement>;

const Form: FC<FormProps> = ({ children, ...rest }) => {
  return (
    <form {...rest}>
      {children}
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
