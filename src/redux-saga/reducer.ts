import { combineReducers } from "redux";
import { HeaderReducer } from "components/Home/reducer";
import { UserCreate, UserForgotPassword, UserLogin, UserResetPassword } from "./reducers/user";
const rootReducer = combineReducers({
    headerReducer: HeaderReducer,
    userCreate: UserCreate,
    userLogin: UserLogin,
    userForgotPassword: UserForgotPassword,
    userResetPassword: UserResetPassword
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;