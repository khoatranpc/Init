import { Action, Query } from "../../global/interface"
import { USER_CREATE_REQUEST } from "../../redux-saga/actions"
import { USER_CREATE_FAILED, USER_CREATE_SUCCESS } from "../../redux-saga/reducers/user"

export const queryCreateUser = (payload?: Query, componentId?: string): Action => {
    return {
        type: USER_CREATE_REQUEST,
        componentId,
        payload: {
            success: USER_CREATE_SUCCESS,
            failed: USER_CREATE_FAILED,
            query: payload
        }
    }
}