import { Action } from "../../global/interface"
import { USER_LOGIN_CLEAR } from "../../redux-saga/reducers/user"

export const queryUserLogout = (): Action => {
    return {
        type: USER_LOGIN_CLEAR,
    }
}