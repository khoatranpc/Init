import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ROLE } from "global/enum";
import { Obj, PayloadJumpTab, PayloadToast } from "global/interface";
import { PATH } from "global/path";
import { State } from "redux-saga/reducer";
import { handleJumpTab, handleViewDetailUser, toastMessage } from "global/global-action";
import { clearDataUser } from "components/AuthProtect/action";

export const useRedirectRoute = () => {
    const nav = useNavigate();
    const crrUser = useSelector((state: State) => state.userLogin);
    return () => {
        if (crrUser && crrUser.success) {
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
        } else {
            nav(PATH.STUDENT_NO_ROLE.HOME.route, { replace: true });
        }
    }
}
export const useUserLogout = () => {
    const nav = useNavigate();
    const crrUser = useSelector((state: State) => state.userLogin);
    const dispatch = useDispatch();
    return () => {
        localStorage.removeItem('access_token');
        dispatch(clearDataUser());
        if ((crrUser?.response as Obj)?.data.userInfor.role === ROLE.ADMIN || (crrUser?.response as Obj)?.data.userInfor.role === ROLE.TEACHER) {
            nav('/auth/login', { replace: true });
        } else {
            window.location.reload();
            nav('/', { replace: true })
        }

    }
}
export const useToast = () => {
    const dispatch = useDispatch();
    return (
        show: boolean, message: string, position:
            'top-start' |
            'top-center' |
            'top-end' |
            'middle-start' |
            'middle-center' |
            'middle-end' |
            'bottom-start' |
            'bottom-center' |
            'bottom-end'
        , type: boolean, clear?: boolean
    ) => {
        const payload: PayloadToast = {
            show,
            message,
            position,
            type
        }
        dispatch(toastMessage(payload, clear))
    }
}
export const useJumpTab = () => {
    const dispatch = useDispatch();
    return (key: string) => {
        const payload: PayloadJumpTab = {
            idTab: key
        }
        dispatch(handleJumpTab(payload))
    }
}

export const useViewDetailUser = () => {
    const dispatch = useDispatch();
    return (id: string, clear?: boolean) => {
        const payload = {
            id
        }
        dispatch(handleViewDetailUser(payload, clear))
    }
}