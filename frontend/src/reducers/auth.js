import {updateObject} from "../utility/utility";
import * as actionTypes from "../action-types/action-type";


const initialState = {
    name : null,
    token : null,
    error : null,
    loading : false,
    interfaceShowing : false,
    signUpSuccess : true,
    isListing : false,
    projectList : [],
    productList : [],
}

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
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
        interfaceShowing: true,
    } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
        interfaceShowing: false,
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, name: null, interfaceShowing: false, loading: false, error: null,});
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const requestProjectSuccess = (state, action) => {
    return updateObject(state, {projectList: action.pro})
}

const requestProjectFail = (state, action) => {
    return updateObject(state, {error: action.err})
}

const requestProductSuccess = (state, action) => {
    return updateObject(state, {productList: action.product, isListing: true})
}

const requestProductFail = (state, action) => {
    return updateObject(state, {error : action.err, isListing: false})
}

const requestReturnToSearch = (state, action) => {
    return updateObject(state, {isListing : false})
}

const auth = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signUpSuccess(state, action);
        case actionTypes.SIGNUP_FAIL: return signUpFail(state, action);
        case actionTypes.FETCH_PROJECT_SUCCESS : return requestProjectSuccess(state, action);
        case actionTypes.FETCH_PROJECT_FAIL :return requestProjectFail(state, action);
        case actionTypes.FETCH_PRODUCT_SUCCESS : return requestProductSuccess(state, action);
        case actionTypes.FETCH_PRODUCT_FAIL : return requestProductFail(state, action);
        case actionTypes.RETURN_TO_SEARCH : return requestReturnToSearch(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};


export default auth;