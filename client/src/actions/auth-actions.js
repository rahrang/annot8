import axios from "axios";

export const AuthConstants = {
  FETCH_USER: "FETCH_USER"
};

export const AuthActions = {
  fetchUser: () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({
      type: AuthConstants.FETCH_USER,
      user: res.data
    });
  }
};
