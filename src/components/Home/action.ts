import { Action, Query } from "../../global/interface"
import { HEADER_REQUEST } from "../../redux-saga/actions"
import { HEADER_FAILED, HEADER_SUCCESS } from "./reducer"

export const queryHeaderAction = (payload?: Query, componentId?: string): Action => {
    return {
        type: HEADER_REQUEST,
        componentId,
        payload: {
            success: HEADER_SUCCESS,
            failed: HEADER_FAILED,
            query: payload
        }
    }
}