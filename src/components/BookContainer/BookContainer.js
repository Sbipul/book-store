import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allBooks from "../../redux/thunks/allBooks/allBooks";
import Book from "../Book/Book";

const BookContainer = () => {
  const dispatch = useDispatch();
  const { books, search } = useSelector((state) => state.books);
  const feature = useSelector((state) => state.route);
  const featureBooks = useSelector((state) => state.features.features);
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    const newBooks = books?.filter((book) =>
      book.name?.toLowerCase().includes(search?.toLowerCase())
    );
    setMyBooks(newBooks);
  }, [books, setMyBooks, search]);

  useEffect(() => {
    dispatch(allBooks);
  }, [dispatch]);
  return (
    <>
      {feature ? (
        <div className="lws-bookContainer">
          {featureBooks?.map((book, i) => (
            <Book key={i} book={book} />
          ))}
        </div>
      ) : (
        <div className="lws-bookContainer">
          {myBooks?.map((book, i) => (
            <Book key={i} book={book} />
          ))}
        </div>
      )}
    </>
  );
};

export default BookContainer;
