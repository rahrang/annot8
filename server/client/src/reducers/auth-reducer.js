import { AuthConstants } from '../actions/auth-actions';

const defaultState = {
  user: {}
};

const AuthReducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case AuthConstants.FETCH_USER:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default AuthReducer;
