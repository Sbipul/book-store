import { generateAction, REMOVE_BOOK } from "../../actions/actions";
import { baseUrl } from "../../baseUrl/baseUrl";

const deleteBooks = (id) => {
  return async (dispatch) => {
    await fetch(`${baseUrl.books}/${id}`, {
      method: "DELETE",
    });
    dispatch(generateAction(REMOVE_BOOK, id));
  };
};
export default deleteBooks;
