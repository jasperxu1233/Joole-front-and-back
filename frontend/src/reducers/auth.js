import {updateObject} from "../utility/utility";
import * as actionTypes from "../action-types/action-type";


const initialState = {
    name : null,
    token : null,
    error : null,
    loading : false,
    interfaceShowing : true,
    signUpSuccess : true,
    isListing : false,
}

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true, interfaceShowing: true } );
};

const signUpSuccess = (state, action) => {
    return updateObject(state, {signUpSuccess : true, loading : false})
}

const signUpFail = (state, action) => {
    return updateObject(state, {signUpSuccess : false, error : action.err, loading: false})
}


const authSuccess = (state, action) => {
    return updateObject( state, {
        token: action.idToken,
        name: action.userId,
        error: null,
        loading: false,
        interfaceShowing: false,
    } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
        interfaceShowing: true,
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, name: null, interfaceShowing: true, loading: false, error: null,});
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const auth = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signUpSuccess(state, action);
        case actionTypes.SIGNUP_FAIL: return signUpFail(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};
export default auth;