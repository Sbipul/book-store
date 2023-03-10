import { Add_BOOKS, FEATURE_BOOK, REMOVE_BOOK } from "../../actions/actions";

const initialState = {
  features: [],
};

const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATURE_BOOK:
      return {
        ...state,
        features: action.payload?.filter((book) => book.featured === "true"),
      };
    case Add_BOOKS:
      if (action.payload.featured !== "true") {
        return state;
      }
      return {
        ...state,
        features: [...state.features, action.payload],
      };
    case REMOVE_BOOK:
      const remain = state.books?.filter((book) => book.id !== action.payload);
      return {
        ...state,
        features: remain,
      };
    default:
      return state;
  }
};
export default featureReducer;
