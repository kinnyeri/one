import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import menu from "./menu";
const rootReducer = combineReducers({
  menu,
});
export default rootReducer;
