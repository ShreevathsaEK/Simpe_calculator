import React from "react";
import "../components/Input.css";

const Input = (props) => {
  return (
    <div className='input'>
      {props.input}
    </div>
  );
};

export default Input;