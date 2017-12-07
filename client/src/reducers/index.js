import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer.js';
import CommentReducer from './comment-reducer.js';
import VideoReducer from './video-reducer.js';

const rootReducer = combineReducers({
  authReducer: AuthReducer,
  commentsReducer: CommentReducer,
  videoReducer: VideoReducer
});

export default rootReducer;
