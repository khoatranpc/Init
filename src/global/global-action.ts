import { HANDLE_JUMP_TAB_REQUEST, HANDLE_JUMP_TAB_CLEAR, HANDLE_TOAST_REQUEST, HANDLE_TOAST_CLEAR, SET_HANDLE_VIEW_DETAIL_COURSE, SET_HANDLE_VIEW_DETAIL_COURSE_CLEAR, VIEW_DETAIL_USER_REQUEST, VIEW_DETAIL_USER_CLEAR } from "./global-reducer";
import { PayloadJumpTab, PayloadToast } from "./interface";

export const handleJumpTab = (payload: PayloadJumpTab | null, isClear?: boolean) => ({
    type: !isClear ? HANDLE_JUMP_TAB_REQUEST : HANDLE_JUMP_TAB_CLEAR,
    payload
})

export const toastMessage = (payload: PayloadToast | null, isClear?: boolean) => ({
    type: !isClear ? HANDLE_TOAST_REQUEST : HANDLE_TOAST_CLEAR,
    payload
})

export const handleSetViewDetailCourse = (payload: { id: string } | null, isClear?: boolean) => ({
    type: !isClear ? SET_HANDLE_VIEW_DETAIL_COURSE : SET_HANDLE_VIEW_DETAIL_COURSE_CLEAR,
    payload
})

export const handleViewDetailUser = (payload: { id: string }, isClear?: boolean) => ({
    type: !isClear ? VIEW_DETAIL_USER_REQUEST : VIEW_DETAIL_USER_CLEAR,
    payload
})