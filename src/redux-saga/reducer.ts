import { HandleViewDetailCourse, HandleViewDetailUser, MoveTabControl, ToastHandle } from "global/global-reducer";
import { combineReducers } from "redux";
import { DataCompany } from "./reducers/company";
import { UserCreate, UserForgotPassword, UserLogin, UserResetPassword } from "./reducers/user";
const rootReducer = combineReducers({
    /* Global */
    moveTabControl: MoveTabControl,
    toastHandle: ToastHandle,
    currentViewDetailCourse: HandleViewDetailCourse,
    handleViewDetailUser:HandleViewDetailUser,
    /* User */
    userCreate: UserCreate,
    userLogin: UserLogin,
    userForgotPassword: UserForgotPassword,
    userResetPassword: UserResetPassword,
    /* Company */
    dataCompany: DataCompany
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;