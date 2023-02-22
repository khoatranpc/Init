import { Action, Query } from "global/interface"
import { DATA_COMPANY_REQUEST } from "../../redux-saga/actions";
import { DATA_COMPANY_FAILED, DATA_COMPANY_SUCCESS } from "../../redux-saga/reducers/company";

export const queryDataCompany = (payload?: Query, componentId?: string): Action => {
    return {
        type: DATA_COMPANY_REQUEST,
        componentId,
        payload: {
            success: DATA_COMPANY_SUCCESS,
            failed: DATA_COMPANY_FAILED,
            query: payload
        }
    }
}