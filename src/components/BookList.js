import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetDefaultBooks, SaveData } from "../api/BookStore";

import classes from "./BookList.module.css";
import BookItem from "./BookItem/BookItem";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { bookActions } from "../store/books";

const BookList = () => {
  const dispatch = useDispatch();
  const [loading,SetLoading] = useState(true);
  const bookList = useSelector((state) => state.books);
  const user = useSelector((state) => state.auth.key);
  const [searchTerm, setSearchTerm] = useState("");
  const [includeRead, setIncludeRead] = useState(true);

  //Load Books
  useEffect(() => {
    GetDefaultBooks(user)
      .then((response) => {
        const transformedData = JSON.parse(response.data.data).books;
        dispatch(bookActions.assignData(transformedData));
      })
      .catch((error) => console.log(error));
      SetLoading(false);
  }, [dispatch,user]);

  const processSave = () => 
  {
    SaveData(user, bookList)
      .then((response) => {
      })
      .catch((error) => console.log(error));
  }

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
      {loading ? "Loading Books" : displayBookList}
    </div>
  );
};

export default BookList;
