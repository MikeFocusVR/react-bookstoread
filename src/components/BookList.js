import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./BookList.module.css";

import BookItem from "./BookItem/BookItem";
import Input from "./UI/Input";
import Button from "./UI/Button";

const BookList = () => {
  const bookList = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");
  const [includeRead, setIncludeRead] = useState(true);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const includeReadHandler = () => { setIncludeRead(!includeRead);}
  const clearSearchHandler =() => { setSearchTerm("");};

  let filteredList = bookList.books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
    || book.position.includes(searchTerm)
    || book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (!includeRead) {
    filteredList = filteredList.filter((book) => !book.read);
  }

  const displayBookList = filteredList.map((book) => <BookItem book={book} key={book.position} />);

  return (
    <div className={classes.container}>
      <Input placeholder="Search by Author, Title or Rank" onChange={searchHandler} value={searchTerm}></Input>
      <Button onClick={clearSearchHandler}>Clear Search</Button>
      <Button onClick={includeReadHandler}>{includeRead ? "Hide" : "Show"} Read Books</Button>
      {displayBookList}
    </div>
  );
};

export default BookList;
