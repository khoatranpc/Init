import { Action, Query } from "global/interface"
import { USER_FORGOT_PASSWORD_REQUEST } from "../../redux-saga/actions"
import { USER_FORGOT_PASSWORD_FAILED, USER_FORGOT_PASSWORD_SUCCESS } from "../../redux-saga/reducers/user"

export const queryForgotUser = (payload?: Query, componentId?: string): Action => {
    return {
        type: USER_FORGOT_PASSWORD_REQUEST,
        componentId,
        payload: {
            success: USER_FORGOT_PASSWORD_SUCCESS,
            failed: USER_FORGOT_PASSWORD_FAILED,
            query: payload
        }
    }
}