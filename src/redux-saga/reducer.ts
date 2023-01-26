import { combineReducers } from "redux";
import { HeaderReducer } from "components/Home/reducer";
import { UserCreate } from "./reducers/user";
const rootReducer = combineReducers({
    headerReducer: HeaderReducer,
    userCreate: UserCreate
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;