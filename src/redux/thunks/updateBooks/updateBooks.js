import { generateAction, UPDATE_BOOK } from "../../actions/actions";
import { baseUrl } from "../../baseUrl/baseUrl";

const updateBook = (book) => {
  return async (dispatch) => {
    const res = await fetch(`${baseUrl.books}/${book.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const resData = await res.json();
    dispatch(generateAction(UPDATE_BOOK, resData));
  };
};
export default updateBook;
