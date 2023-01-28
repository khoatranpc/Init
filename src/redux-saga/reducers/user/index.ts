import createReducer from "utils/redux";

export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_FAILED = 'USER_CREATE_FAILED';
export const USER_CREATE_CLEAR = 'USER_CREATE_CLEAR';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGIN_CLEAR = 'USER_LOGIN_CLEAR';

export const USER_FORGOT_PASSWORD_SUCCESS = 'USER_FORGOT_PASSWORD_SUCCESS';
export const USER_FORGOT_PASSWORD_FAILED = 'USER_FORGOT_PASSWORD_FAILED';
export const USER_FORGOT_PASSWORD_CLEAR = 'USER_FORGOT_PASSWORD_CLEAR';

export const USER_RESET_PASSWORD_SUCCESS = 'USER_RESET_PASSWORD_SUCCESS';
export const USER_RESET_PASSWORD_FAILED = 'USER_RESET_PASSWORD_FAILED';
export const USER_RESET_PASSWORD_CLEAR = 'USER_RESET_PASSWORD_CLEAR';


export const UserCreate = createReducer(USER_CREATE_SUCCESS, USER_CREATE_FAILED, USER_CREATE_CLEAR);
export const UserLogin = createReducer(USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_CLEAR);
export const UserForgotPassword = createReducer(USER_FORGOT_PASSWORD_SUCCESS, USER_FORGOT_PASSWORD_FAILED, USER_FORGOT_PASSWORD_CLEAR);
export const UserResetPassword = createReducer(USER_RESET_PASSWORD_SUCCESS, USER_RESET_PASSWORD_FAILED, USER_RESET_PASSWORD_CLEAR);