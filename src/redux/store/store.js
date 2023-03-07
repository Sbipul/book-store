import routeReducer from "../reducers/routeReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { default: bookReducer } = require("../reducers/bookReducer/bookReducer");
const {
  default: featureReducer,
} = require("../reducers/featureReducer/featureReducer");

const rootReducer = combineReducers({
  books: bookReducer,
  features: featureReducer,
  route: routeReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
