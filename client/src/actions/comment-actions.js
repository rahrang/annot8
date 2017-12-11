import axios from 'axios';

export const CommentConstants = {
  FETCH_USER_COMMENTS: 'FETCH_USER_COMMENTS',
  FETCH_USER_VIDEO_COMMENTS: 'FETCH_USER_VIDEO_COMMENTS',
  FETCH_TIMESTAMP_COMMENTS: 'FETCH_TIMESTAMP_COMMENTS',
  FETCH_VIDEO_COMMENTS: 'FETCH_VIDEO_COMMENTS'
};

export const CommentActions = {
  fetchVideoComments: videoId => async dispatch => {
    const params = { videoId };
    const res = await axios.get('/api/video/comments/all', { params });
    dispatch({
      type: CommentConstants.FETCH_VIDEO_COMMENTS,
      video_comments: res.data
    });
  },

  fetchTimestampComments: (videoId, timestamp) => async dispatch => {
    const params = { videoId, timestamp };
    const res = await axios.get('/api/video/comments/timestamp', { params });
    dispatch({
      type: CommentConstants.FETCH_TIMESTAMP_COMMENTS,
      timestamp_comments: res.data
    });
  },

  fetchUserComments: () => async dispatch => {
    const res = await axios.get('/api/user/comments', {});
    dispatch({
      type: CommentConstants.FETCH_USER_COMMENTS,
      user_comments: res.data
    });
  },

  fetchUserVideoComments: videoId => async dispatch => {
    const params = { videoId };
    const res = await axios.get('/api/user/video/comments', { params });
    dispatch({
      type: CommentConstants.FETCH_USER_VIDEO_COMMENTS,
      user_comments: res.data
    });
  },

  makeComment: (
    videoId,
    videoTitle,
    timestamp,
    userName,
    isAnonymous,
    text
  ) => async dispatch => {
    const params = {
      videoId,
      videoTitle,
      timestamp,
      userName,
      isAnonymous,
      text
    };
    const res = await axios.post('/api/video/comments', params);
    dispatch({
      type: CommentConstants.FETCH_TIMESTAMP_COMMENTS,
      timestamp_comments: res.data
    });
  },

  deleteComment: (videoId, commentId, timestamp, type) => async dispatch => {
    const params = { videoId, commentId, timestamp };
    const res = await axios.delete('/api/video/comments', { params });
    switch (type) {
      case 'user':
        return dispatch({
          type: CommentConstants.FETCH_USER_COMMENTS,
          user_comments: res.data
        });
      case 'video':
        return dispatch({
          type: CommentConstants.FETCH_TIMESTAMP_COMMENTS,
          timestamp_comments: res.data
        });
      default:
        return;
    }
  }
};
