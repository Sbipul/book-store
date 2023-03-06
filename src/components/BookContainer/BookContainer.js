import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allBooks from "../../redux/thunks/allBooks/allBooks";
import Book from "../Book/Book";

const BookContainer = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(allBooks);
  }, [dispatch]);
  console.log(books);
  return (
    <div className="lws-bookContainer">
      {books.map((book, i) => (
        <Book key={i} book={book} />
      ))}
    </div>
  );
};

export default BookContainer;
