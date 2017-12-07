import axios from 'axios';

export const VideoConstants = {
  FETCH_VIDEO_STATS: 'FETCH_VIDEO_STATS'
};

export const VideoActions = {
  fetchVideoStats: videoId => async dispatch => {
    const params = { videoId };
    const res = await axios.post('/api/video/stats', params);
    console.log(res);
    return dispatch({
      type: VideoConstants.FETCH_VIDEO_STATS,
      title: res.data.title,
      duration: res.data.duration
    });
  }
};
