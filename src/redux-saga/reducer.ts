import { combineReducers } from "redux";
import { UserCreate, UserForgotPassword, UserLogin, UserResetPassword } from "./reducers/user";
const rootReducer = combineReducers({
    userCreate: UserCreate,
    userLogin: UserLogin,
    userForgotPassword: UserForgotPassword,
    userResetPassword: UserResetPassword
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;