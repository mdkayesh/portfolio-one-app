import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url, children }) => {
  return (
    <Link to={url} className={"button"}>
      <span>{children}</span>
    </Link>
  );
};

export default Button;
