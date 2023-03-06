export const GET_BOOKS = "getAllBook/book";
export const Add_BOOKS = "addBook/book";
export const REMOVE_BOOK = "removeBook/book";
export const UPDATE_BOOK = "updateBook/book";
export const STORE_FOR_UPDATE = "storeForUpdate/update";
export const SEARCH_BOOK = "search/book";
export const generateAction = (type, payload) => {
  return { type, payload };
};
