import React from "react";
import "../components/Button.css";

const Button = (props) => {
  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
