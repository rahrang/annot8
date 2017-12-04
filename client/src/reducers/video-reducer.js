import { VideoConstants } from '../actions/video-actions';

const defaultState = {
  title: '',
  duration: ''
};

const VideoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case VideoConstants.FETCH_USER_COMMENTS:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default VideoReducer;
