import React, { FC } from "react";

interface FormProps extends HTMLFormElement {}

const Form: FC<FormProps> = ({ children }) => {
  return <form>{children}</form>;
};

export default Form;
