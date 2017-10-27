import axios from "axios";

export const CommentConstants = {
  FETCH_COMMENTS: "FETCH_COMMENTS"
};

export const CommentActions = {
  fetchVideoComments: videoId => async dispatch => {
    const params = { videoId };
    const res = await axios.get("/api/video/comments", { params });
    dispatch({
      type: CommentConstants.FETCH_COMMENTS,
      comments: res.data
    });
  },

  fetchUserComments: videoId => async dispatch => {
    const params = { videoId };
    const res = await axios.get("/api/user/video/comments", { params });
    dispatch({
      type: CommentConstants.FETCH_COMMENTS,
      comments: res.data
    });
  },

  makeComment: (videoId, timestamp, text) => async dispatch => {
    const params = { videoId, timestamp, text };
    const res = await axios.post("/api/video/comments", params);
    dispatch({
      type: CommentConstants.FETCH_COMMENTS,
      comments: res.data
    });
  }
};
