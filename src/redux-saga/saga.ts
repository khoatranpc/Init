import { all } from "redux-saga/effects";
import { queryDataCompany } from "./sagas/company";
import { queryUserCreate, queryUserForgotPassword, queryUserGetInformation, queryUserLogin, queryUserResetPassword } from "./sagas/user";

export function* rootSaga() {
  yield all([
    queryUserCreate(),
    queryUserLogin(),
    queryUserForgotPassword(),
    queryUserResetPassword(),
    queryUserGetInformation(),
    queryDataCompany()
  ]);
}