import { Action, Query } from "global/interface"
import { USER_GET_INFORMATION_REQUEST } from "../../redux-saga/actions"
import { USER_LOGIN_CLEAR, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from "../../redux-saga/reducers/user"

export const queryGetInformationUser = (payload?: Query, componentId?: string): Action => {
    return {
        type: USER_GET_INFORMATION_REQUEST,
        componentId,
        payload: {
            success: USER_LOGIN_SUCCESS,
            failed: USER_LOGIN_FAILED,
            query: payload
        }
    }
}
export const clearDataUser = () => ({ type: USER_LOGIN_CLEAR })