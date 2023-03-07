import {
  Add_BOOKS,
  GET_BOOKS,
  REMOVE_BOOK,
  SEARCH_BOOK,
  STORE_FOR_UPDATE,
  UPDATE_BOOK,
} from "../../actions/actions";

const initialState = {
  books: [],
  updateData: {},
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case REMOVE_BOOK:
      const remain = state.books.filter((book) => book.id !== action.payload);
      return {
        ...state,
        books: remain,
      };
    case Add_BOOKS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case STORE_FOR_UPDATE:
      return {
        ...state,
        updateData: action.payload,
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id !== action.payload.id) {
            return book;
          }
          return {
            ...action.payload,
          };
        }),
      };
    case SEARCH_BOOK:
      const searchedBooks = state.books.filter((book) =>
        book.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        books: searchedBooks,
      };
    default:
      return state;
  }
};
export default bookReducer;
