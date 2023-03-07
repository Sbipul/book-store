import { FEATURE_BOOK, generateAction, GET_BOOKS } from "../../actions/actions";
import { baseUrl } from "../../baseUrl/baseUrl";

const allBooks = async (dispatch) => {
  const res = await fetch(baseUrl.books);
  const resData = await res.json();
  dispatch(generateAction(GET_BOOKS, resData));
  dispatch(generateAction(FEATURE_BOOK, resData));
};
export default allBooks;
