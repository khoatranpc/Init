import { Action, Query } from "global/interface"
import { USER_LOGIN_REQUEST } from "../../redux-saga/actions"
import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from "../../redux-saga/reducers/user"

export const queryLoginUser = (payload?: Query, componentId?: string): Action => {
    return {
        type: USER_LOGIN_REQUEST,
        componentId,
        payload: {
            success: USER_LOGIN_SUCCESS,
            failed: USER_LOGIN_FAILED,
            query: payload
        }
    }
}