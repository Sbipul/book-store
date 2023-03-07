import { ACTIVE_FEATURE } from "../actions/actions";

const initialState = false;

const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_FEATURE:
      return action.payload;

    default:
      return state;
  }
};
export default routeReducer;
