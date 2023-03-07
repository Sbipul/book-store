import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allBooks from "../../redux/thunks/allBooks/allBooks";
import Book from "../Book/Book";

const BookContainer = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const feature = useSelector((state) => state.route);
  const featureBooks = useSelector((state) => state.features.features);
  console.log(featureBooks);
  useEffect(() => {
    dispatch(allBooks);
  }, [dispatch]);
  return (
    <div className="lws-bookContainer">
      {(!feature ? books : featureBooks).map((book, i) => (
        <Book key={i} book={book} />
      ))}
    </div>
  );
};

export default BookContainer;
