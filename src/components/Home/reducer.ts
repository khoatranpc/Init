import createReducer from "../../utils/redux";

export const HEADER_SUCCESS = 'HEADER_SUCCESS';
export const HEADER_FAILED = 'HEADER_FAILED';

export const HeaderReducer = createReducer(HEADER_SUCCESS, HEADER_FAILED);