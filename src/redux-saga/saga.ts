import { all } from "redux-saga/effects";
import { queryUserCreate, queryUserForgotPassword, queryUserLogin, queryUserResetPassword } from "./sagas/user";

export function* rootSaga() {
  yield all([
    queryUserCreate(),
    queryUserLogin(),
    queryUserForgotPassword(),
    queryUserResetPassword()
  ]);
}