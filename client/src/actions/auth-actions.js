import axios from 'axios';

export const AuthConstants = {
    FETCH_USER: "FETCH_USER",
};

export const AuthActions = {

    fetchUser: () => {
        return function(dispatch) {
            axios.get('/api/current_user')
            .then((res) => dispatch({
                type: AuthConstants.FETCH_USER,
                payload: res
            }));
        }
    }

};
