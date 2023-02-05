import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetDefaultBooks } from "../api/BookStore";

import classes from "./BookList.module.css";
import BookItem from "./BookItem/BookItem";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { bookActions } from "../store/books";

const BookList = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");
  const [includeRead, setIncludeRead] = useState(true);

  //Load Books
  useEffect(() => {
    GetDefaultBooks()
      .then((response) => {
        const transformedData = JSON.parse(JSON.parse(response.data.body).data);
        dispatch(bookActions.assignData(transformedData));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const includeReadHandler = () => {
    setIncludeRead(!includeRead);
  };
  const clearSearchHandler = () => {
    setSearchTerm("");
  };

  let filteredList = bookList.books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.position.includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!includeRead) {
    filteredList = filteredList.filter((book) => !book.read);
  }

  const displayBookList = filteredList.map((book) => (
    <BookItem book={book} key={book.position} />
  ));

  return (
    <div className={classes.container}>
      <Input
        placeholder="Search by Author, Title or Rank"
        onChange={searchHandler}
        value={searchTerm}
      ></Input>
      <Button onClick={clearSearchHandler}>Clear Search</Button>
      <Button onClick={includeReadHandler}>
        {includeRead ? "Hide" : "Show"} Read Books
      </Button>
      {displayBookList}
    </div>
  );
};

export default BookList;
