import { all } from "redux-saga/effects";
import { queryHeader } from "./sagas/header";
import { queryUserCreate } from "./sagas/user";

export function* rootSaga() {
  yield all([
    queryHeader(),
    queryUserCreate()
  ]);
}