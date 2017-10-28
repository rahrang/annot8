import axios from "axios";

export const CommentConstants = {
  FETCH_USER_COMMENTS: "FETCH_USER_COMMENTS",
  FETCH_VIDEO_COMMENTS: "FETCH_VIDEO_COMMENTS"
};

export const CommentActions = {
  fetchVideoComments: videoId => async dispatch => {
    const params = { videoId };
    const res = await axios.get("/api/video/comments", { params });
    dispatch({
      type: CommentConstants.FETCH_VIDEO_COMMENTS,
      video_comments: res.data
    });
  },

  fetchUserComments: videoId => async dispatch => {
    const params = { videoId };
    const res = await axios.get("/api/user/video/comments", { params });
    dispatch({
      type: CommentConstants.FETCH_USER_COMMENTS,
      user_comments: res.data
    });
  },

  makeComment: (
    videoId,
    timestamp,
    userName,
    userEmail,
    text
  ) => async dispatch => {
    const params = { videoId, timestamp, userName, userEmail, text };
    const res = await axios.post("/api/video/comments", params);
    dispatch({
      type: CommentConstants.FETCH_VIDEO_COMMENTS,
      video_comments: res.data
    });
  }
};
