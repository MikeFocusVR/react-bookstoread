import React from "react";
import classes from "./Card.module.css";

const Card = (props, {alternate = false}) => {

  return (
    <div className={props.alternate ? classes.cardAlternate : classes.card}>
      {props.children}
    </div>
  );
};

export default Card;
