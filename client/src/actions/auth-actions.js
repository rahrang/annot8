import axios from "axios";

export const AuthConstants = {
  FETCH_USER: "FETCH_USER",
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT"
};

export const AuthActions = {
  fetchUser: () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({
      type: AuthConstants.FETCH_USER,
      user: res.data
    });
  },

  login: () => async dispatch => {
    const res = await axios.get("/auth/google");
    dispatch({
      type: AuthConstants.LOG_IN,
      user: res.data
    });
  },

  logout: () => async dispatch => {
    await axios.get("/api/logout");
    dispatch({
      type: AuthConstants.LOG_OUT,
      user: {}
    });
  }
};
