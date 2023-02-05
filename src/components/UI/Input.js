import React from "react";
import classes from './Input.module.css';

const Input = ({ placeholder = "", type = "text" ,onChange, value}) =>
{
    return <input placeholder={placeholder} type={type} className={classes.input} onChange={onChange} value={value}></input>
};

export default Input;