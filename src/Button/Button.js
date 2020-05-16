import React from "react";
import PropTypes from "prop-types";

const Button = ({ children }) => <button>{children}</button>;

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
