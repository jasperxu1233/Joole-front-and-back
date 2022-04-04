import axios from 'axios';
import instance from "../axios"

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
        // console.log("signUp");
        dispatch(authStart());
        const authDate = {
            username : name,
            password : password,
        };
        if(new Date().getTime() >= new Date(localStorage.getItem('expirationDate'))){
            axios.defaults.headers.common['Authorization'] = ``;
        }
        let url = 'http://localhost:8080/joole/users/register';
        // let url = 'users/register';
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
        // console.log("Login");
        dispatch(authStart());
        const authData = {
            username: name,
            password: password,
        };
        // console.log(authData)
        let url = 'http://localhost:8080/joole/users/login';

        // let url = '/users/login';
        if (!isSignUp) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdHVdiAhum7t4UG8c0fHGT-PXUwKvurK4';
        }
        if(new Date().getTime() >= new Date(localStorage.getItem('expirationDate'))){
            axios.defaults.headers.common['Authorization'] = ``;
        }
        axios.post(url, authData)
            .then(response => {  // successfully login
                console.log(response);
                const lastingTime = 1000 * 60 * 60;
                const expirationDate = new Date(new Date().getTime() + lastingTime);   // here, how to get the expiration time from response when logging in // or  how to implement the automatically log out when token expires in backend??? and then cause frontend to logout and need to login again
                localStorage.setItem('token', response.data);
                // console.log(response.data);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', name);
                dispatch(authSuccess(response.data, name));
                dispatch(checkAuthTimeout(lastingTime));
                // dispatch(setTimeout(()=>{dispatch(fetchProject())},2000));
                dispatch(intermediateFetch());
            })
            .catch(err => {
                dispatch(authFail(err));
            })
    };
}

export const fetchProjectSuccess = (data) => {
    return{
        type : actionTypes.FETCH_PROJECT_SUCCESS,
        pro : data
    }
}

export const fetchProjectFail = (e) => {
    return{
        type : actionTypes.FETCH_PROJECT_FAIL,
        err : e,
    }
}

//（有个问题，fetch的时候如果token过期了，就验证不了会自动跳回主界面，然后清楚local storage并且清除axios的token要求重新登录，
// 只要设置前端的时间保证比给后端的时间短就行，所以前端页面跳回login和fetch有效是同步的，在没调回去的过程中，token一直有效，local storage一直存着有效的token，
// axios也是一直有效的token，可以随便做任何操作，但是一到时间之后，token失效了，就会自动跳回主界面，local storage以及axios自动清除，重新再登录。
// 就算是刷新到主界面也可以用token，账户名+密码重新登录相当于重新登陆，而且就算跳刷新回到主界面之后，
// 没及时登录token失效，也会相当于跳回主界面，清除local storage和axios的token，相当于要求重新登陆。）
// used to fetch all project under current user

export const intermediateFetch = () => {
    return dispatch => {
        setTimeout(()=>dispatch(fetchProject()),1000);
    }
}


export const fetchProject = () => {
    return dispatch => {
        // instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        // console.log(instance.defaults.headers.common['Authorization']);

        let url = 'http://localhost:8080/joole/projects/getAllProject';
        // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        axios.defaults.headers.common['Authorization'] = new Date().getTime() >= new Date(localStorage.getItem('expirationDate'))?``:`Bearer ${localStorage.getItem("token")}`;
        // let url = '/projects/getAllProject';
        axios.get(url)
            .then(res => {
                dispatch(fetchProjectSuccess(res.data));
                console.log(res.data);
        }).catch(err => {
            dispatch(fetchProjectFail(err))
            console.log(err)
        })
    }
}

export const fetchProduct = (projectId, manufacturerName) => {
    return dispatch => {
        axios.defaults.headers.common['Authorization'] = new Date().getTime() >= new Date(localStorage.getItem('expirationDate'))?``:`Bearer ${localStorage.getItem("token")}`;
        const queryParams = '?projectId=' + projectId + '&manufacturerName='+manufacturerName;
        let url = 'http://localhost:8080/joole/projects/getAllProductByProjectIdAndManufacturer';
        axios.get(url + queryParams)
            .then(
                res => {
                    console.log(res.data);
                    dispatch(fetchProductSuccess(res.data));
                }
            )
            .catch(err => {
                console.log(err);
                dispatch(fetchProductFAIL(err));
            })
    }
}

export const fetchProductSuccess = (res) => {
    return {
        type : actionTypes.FETCH_PRODUCT_SUCCESS,
        product : res
    }
}

export const fetchProductFAIL = (e) => {
    return {
        type : actionTypes.FETCH_PRODUCT_FAIL,
        err : e
    }
}

export const returnToSearch = () => {
    return {
        type : actionTypes.RETURN_TO_SEARCH
    }
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