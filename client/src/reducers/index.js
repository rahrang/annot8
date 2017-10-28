import { combineReducers } from "redux";
import AuthReducer from "./auth-reducer.js";
import CommentReducer from "./comment-reducer.js";

const rootReducer = combineReducers({
  authReducer: AuthReducer,
  commentsReducer: CommentReducer
});

export default rootReducer;
