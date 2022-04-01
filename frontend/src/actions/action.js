import axios from 'axios';

import * as actionTypes from '../action-types/action-type';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: username,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};

export const SignUpSuccess = () => {
    return{
        type:actionTypes.SIGNUP_SUCCESS
    }
}

export const SignUpFail = (e) => {
    return{
        type : actionTypes.SIGNUP_FAIL,
        err : e
    }
}

export const signUp = (name, password, isSignUp) => {
    return dispatch => {
        console.log("signUp");
        dispatch(authStart());
        const authDate = {
            username : name,
            password : password,
        };
        let url = 'http://localhost:8080/joole/users/register';
        if (!isSignUp) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdHVdiAhum7t4UG8c0fHGT-PXUwKvurK4';
        }
        axios.post(url, authDate)
            .then(response => {  // successfully signup
                console.log(response);
                dispatch(SignUpSuccess())
            })
            .catch(err => {
                dispatch(SignUpFail(err));
            })
    }
}

export const auth = (name, password, isSignUp) => {
    return dispatch => {
        console.log("Login");
        dispatch(authStart());
        const authData = {
            username: name,
            password: password,
        };
        console.log(authData)
        let url = 'http://localhost:8080/joole/users/login';
        if (!isSignUp) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdHVdiAhum7t4UG8c0fHGT-PXUwKvurK4';
        }
        axios.post(url, authData)
            .then(response => {  // successfully login
                console.log(response);
                const lastingTime = 1000 * 60 * 60;
                const expirationDate = new Date(new Date().getTime() + lastingTime);   // here, how to get the expiration time from response when logging in // or  how to implement the automatically log out when token expires in backend??? and then cause frontend to logout and need to login again
                localStorage.setItem('token', response.data);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', name);
                dispatch(authSuccess(response.data, name));
                dispatch(checkAuthTimeout(lastingTime));
            })
            .catch(err => {
                dispatch(authFail(err));
            })
    };
}

// export const setAuthRedirectPath = (path) => {
//     return {
//         type: actionTypes.SET_AUTH_REDIRECT_PATH,
//         path: path
//     };
// };

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};