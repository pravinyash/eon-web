import clusterReducer from "./clusterReducer";
import userReducer from "./userReducer";
import eventReducer from "./eventReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  clusterReducer,
  userReducer,
  eventReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
