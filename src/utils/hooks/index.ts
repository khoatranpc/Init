// import { useDispatch } from "react-redux";
import { ROLE } from "global/enum";
import { Obj } from "global/interface";
import { PATH } from "global/path";
// import { queryUserLogout } from "layouts/Main/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "redux-saga/reducer";

export const useRedirectRoute = () => {
    const nav = useNavigate();
    const crrUser = useSelector((state: State) => state.userLogin);
    return () => {
        switch ((crrUser?.response as Obj)?.data.userInfor.role as ROLE) {
            case ROLE.STUDENT:
                nav(PATH.STUDENT_NO_ROLE.HOME.route, { replace: true });
                break;
            case ROLE.TEACHER:
                nav(PATH.TEACHER.HOME.route, { replace: true });
                break;
            case ROLE.ADMIN:
                nav(PATH.ADMIN.HOME.route, { replace: true });
                break;
            default:
                nav(PATH.STUDENT_NO_ROLE.HOME.route, { replace: true });
                break;
        }
    }
}
export const useUserLogout = () => {
    // const dispatch = useDispatch();
    return () => {
        window.location.reload();
        localStorage.setItem('logout', 'true');
        // dispatch(queryUserLogout());
    }
}