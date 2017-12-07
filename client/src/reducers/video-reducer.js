import { VideoConstants } from '../actions/video-actions';

const defaultState = {
  title: '',
  duration: ''
};

const VideoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case VideoConstants.FETCH_VIDEO_STATS:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default VideoReducer;
