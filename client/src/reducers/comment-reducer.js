import { CommentConstants } from '../actions/comment-actions';

const defaultState = {
  comments: {}
};

const CommentReducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case CommentConstants.FETCH_COMMENTS:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default CommentReducer;
