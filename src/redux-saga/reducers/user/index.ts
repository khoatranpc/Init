import createReducer from "utils/redux";

export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_FAILED = 'USER_CREATE_FAILED';
export const USER_CREATE_CLEAR = 'USER_CREATE_CLEAR';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGIN_CLEAR = 'USER_LOGIN_CLEAR';


export const UserCreate = createReducer(USER_CREATE_SUCCESS, USER_CREATE_FAILED, USER_CREATE_CLEAR);
export const UserLogin = createReducer(USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_CLEAR);