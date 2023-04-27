import { combineReducers } from "redux";
import menu from "./menu";
import status from "./status";
const rootReducer = combineReducers({
  menu,
  status,
});
export default rootReducer;
