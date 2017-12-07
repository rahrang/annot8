import { CommentConstants } from '../actions/comment-actions';

const defaultState = {
  user_comments: [], // comments made by the current user
  video_comments: [], // comments made at distinct timestamps throughout the video
  timestamp_comments: [] // comments made at a specific timestamp
};

const CommentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CommentConstants.FETCH_USER_COMMENTS:
    case CommentConstants.FETCH_USER_VIDEO_COMMENTS:
    case CommentConstants.FETCH_TIMESTAMP_COMMENTS:
    case CommentConstants.FETCH_VIDEO_COMMENTS:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default CommentReducer;
