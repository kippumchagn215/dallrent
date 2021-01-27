import { applyMiddleware, combineReducers, createStore } from "redux";
import searchReducer from "./search";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  search: searchReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
