import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./BookItem.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import { bookActions } from "../../store/books";

const BookItem = (props) => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const markAsReadHandler = (event) => {
    dispatch(bookActions.markAsRead(event.currentTarget.id));
  };

  const showDetailsHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <Card alternate={props.book.read}>
      <div className={classes.container}>
        <div className={classes.titlebar}>
          <span className={classes.title} onClick={showDetailsHandler}>
            {props.book.position} {props.book.name}{" "}
            {props.book.read && "(read)"}
            <div className={classes.author}>{props.book.author}</div>
          </span>
          <span className={classes.actions}>
            <Button onClick={markAsReadHandler} id={props.book.position}>
              Mark as {props.book.read && "un"}read
            </Button>
            <Button onClick={showDetailsHandler}>
              {expanded ? "Hide" : "Show"} Details
            </Button>
          </span>
        </div>
        {expanded && (
          <>
            <div className={classes.bookdetails}>
              <img
                src={props.book.details.coverimg}
                alt="Book cover"
                className={classes.image}
              ></img>
              <span className={classes.synopsis}>
                {props.book.details.synopsis}
              </span>
            </div>
            <span className={classes.externalLinks}>
              {props.book.links.amazon.length > 0 && (
                <a
                  href={props.book.links.amazon}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>View on Amazon</Button>
                </a>
              )}
              {props.book.links.audible.length > 0 && (
                <a
                  href={props.book.links.audible}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>View on Audible</Button>
                </a>
              )}
              {props.book.links.bookwiki.length > 0 && (
                <a
                  href={props.book.links.bookwiki}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>View Wiki Page</Button>
                </a>
              )}
              {props.book.links.author.length > 0 && (
                <a
                  href={props.book.links.author}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>View Author Page</Button>
                </a>
              )}
            </span>
          </>
        )}
      </div>
    </Card>
  );
};

export default BookItem;
