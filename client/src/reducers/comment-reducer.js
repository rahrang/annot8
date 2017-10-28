import { CommentConstants } from "../actions/comment-actions";

const defaultState = {
  user_comments: [],
  video_comments: [],
  timestamp_comments: []
};

const CommentReducer = (state = defaultState, action) => {
  // console.log(action);
  switch (action.type) {
    case CommentConstants.FETCH_USER_COMMENTS:
    case CommentConstants.FETCH_TIMESTAMP_COMMENTS:
    case CommentConstants.FETCH_VIDEO_COMMENTS:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default CommentReducer;
