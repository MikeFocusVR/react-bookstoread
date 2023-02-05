import React, {useState} from "react";
import { useDispatch } from "react-redux";
import classes from "./BookItem.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import { bookActions } from "../../store/books";

const BookItem = (props) => {
    const dispatch = useDispatch();

    const [expanded,setExpanded] = useState(false);

  const markAsReadHandler = (event) => {
    dispatch(bookActions.markAsRead(event.currentTarget.id));
  };

  const showDetailsHandler = () => {
    setExpanded(!expanded);
  }

  return (
    <Card alternate={props.book.read}>
      <div className={classes.container}>
        <div className={classes.titlebar}>
          <span className={classes.title} onClick={showDetailsHandler}>{props.book.position} {props.book.name} {props.book.read && "(read)"}
        <div className={classes.author}>{props.book.author}</div></span>
          <span className={classes.actions}>
            <Button onClick={markAsReadHandler} id={props.book.position}>Mark as {props.book.read && "un"}read</Button>
            <Button onClick={showDetailsHandler}>{expanded ? "Hide" : "Show"} Details</Button>
          </span>
        </div>
        {expanded && <div className={classes.bookdetails}>
          <img
            src={props.book.details.coverimg}
            alt="Book cover"
            className={classes.image}
          ></img>
          <p className={classes.synopsis}>{props.book.details.synopsis}</p>
        </div>}
      </div>
    </Card>
  );
};

export default BookItem;
