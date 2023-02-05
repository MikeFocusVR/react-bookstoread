import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button} id={props.id}>
      {props.children}
    </button>
  );
};

export default Button;
