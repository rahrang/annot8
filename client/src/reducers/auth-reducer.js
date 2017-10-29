import { AuthConstants } from "../actions/auth-actions";

const defaultState = {
  user: {}
};

const AuthReducer = (state = defaultState, action) => {
  // console.log(action);
  switch (action.type) {
    case AuthConstants.FETCH_USER:
    case AuthConstants.LOG_IN:
    case AuthConstants.LOG_OUT:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default AuthReducer;
