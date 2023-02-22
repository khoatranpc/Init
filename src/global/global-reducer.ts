import { JumpTabAction, Obj, ToastAction } from "./interface";
import { createGlobalReducer } from "utils/redux";

export const HANDLE_JUMP_TAB_REQUEST = 'HANDLE_JUMP_TAB_REQUEST';
export const HANDLE_JUMP_TAB_CLEAR = 'HANDLE_JUMP_TAB_CLEAR';

export const MoveTabControl = (state: Obj | null = null, action: JumpTabAction) => {
    switch (action.type) {
        case HANDLE_JUMP_TAB_REQUEST:
            return {
                ...state,
                ...action.payload
            }
        case HANDLE_JUMP_TAB_CLEAR:
            return null;
        default:
            return state;
    }
}

export const HANDLE_TOAST_REQUEST = 'HANDLE_TOAST_REQUEST';
export const HANDLE_TOAST_CLEAR = 'HANDLE_TOAST_CLEAR';

export const ToastHandle = (state: Obj | null = null, action: ToastAction) => {
    switch (action.type) {
        case HANDLE_TOAST_REQUEST:
            return {
                ...state,
                ...action.payload
            }
        case HANDLE_TOAST_CLEAR:
            return null;
        default:
            return state;
    }
}

export const SET_HANDLE_VIEW_DETAIL_COURSE = 'SET_HANDLE_VIEW_DETAIL_COURSE';
export const SET_HANDLE_VIEW_DETAIL_COURSE_CLEAR = 'SET_HANDLE_VIEW_DETAIL_COURSE_CLEAR';

export const HandleViewDetailCourse = (state: Obj | null = null, action: ToastAction) => {
    switch (action.type) {
        case SET_HANDLE_VIEW_DETAIL_COURSE:
            return {
                ...state,
                ...action.payload
            }
        case SET_HANDLE_VIEW_DETAIL_COURSE_CLEAR:
            return null;
        default:
            return state;
    }
}

export const VIEW_DETAIL_USER_REQUEST = 'VIEW_DETAIL_USER_REQUEST';
export const VIEW_DETAIL_USER_CLEAR = 'VIEW_DETAIL_USER_CLEAR';
export const HandleViewDetailUser = createGlobalReducer(VIEW_DETAIL_USER_REQUEST, VIEW_DETAIL_USER_CLEAR);