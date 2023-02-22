import createReducer from "utils/redux";

export const DATA_COMPANY_SUCCESS = 'DATA_COMPANY_SUCCESS';
export const DATA_COMPANY_FAILED = 'DATA_COMPANY_FAILED';

export const DataCompany = createReducer(DATA_COMPANY_SUCCESS, DATA_COMPANY_FAILED);