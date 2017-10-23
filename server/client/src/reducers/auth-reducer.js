import { AuthConstants } from '../actions/auth-actions';

const defaultState = {};

const AuthReducer = (state = defaultState, action) => {
    console.log(action);
  switch (action.type) {
    case AuthConstants.FETCH_USER:
        return state;
    default:
      return state;
  }
};

export default AuthReducer;
