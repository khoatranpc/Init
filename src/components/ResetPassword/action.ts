import { Action, Query } from "global/interface"
import { USER_RESET_PASSWORD_REQUEST } from "../../redux-saga/actions"
import { USER_RESET_PASSWORD_FAILED, USER_RESET_PASSWORD_SUCCESS } from "../../redux-saga/reducers/user"

export const queryLoginUser = (payload?: Query, componentId?: string): Action => {
    return {
        type: USER_RESET_PASSWORD_REQUEST,
        componentId,
        payload: {
            success: USER_RESET_PASSWORD_SUCCESS,
            failed: USER_RESET_PASSWORD_FAILED,
            query: payload
        }
    }
}