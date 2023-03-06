import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBooks from "../../redux/thunks/addBooks/addBooks";

const AddBook = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.books.updateData);
  const { author, featured, name, price, rating, thumbnail } = storeData;
  const [book, setBook] = useState({});
  const setBookData = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBooks(book));
  };
  console.log(book);
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form onSubmit={handleAddBook} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            defaultValue={name && name}
            onChange={setBookData}
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            defaultValue={author && author}
            onChange={setBookData}
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            defaultValue={thumbnail && thumbnail}
            onChange={setBookData}
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              defaultValue={price && price}
              onChange={setBookData}
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              defaultValue={rating && rating}
              onChange={setBookData}
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            defaultValue={featured && featured}
            onChange={setBookData}
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
