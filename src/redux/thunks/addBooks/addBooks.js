import { Add_BOOKS, generateAction } from "../../actions/actions";
import { baseUrl } from "../../baseUrl/baseUrl";

const addBooks = (book) => {
  return async (dispatch) => {
    const res = await fetch(baseUrl.books, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const resData = await res.json();
    console.log(resData);
    dispatch(generateAction(Add_BOOKS, book));
  };
};

export default addBooks;
