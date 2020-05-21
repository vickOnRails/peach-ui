import React, { FC } from "react";

type FormProps = HTMLFormElement;

const Form: FC<FormProps> = ({ children }) => {
  return <form>{children}</form>;
};

export default Form;
