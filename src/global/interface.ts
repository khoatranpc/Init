import { AgGridReact } from "ag-grid-react";
import { AnyAction } from "redux";

export interface Action extends AnyAction {
    type: string;
    componentId?: string;
    payload?: {
        success?: string;
        failed?: string;
        query?: Query
    },
    response?: Record<string, unknown> | null;
    success?: boolean;
}
export interface Obj {
    [k: string]: {} | undefined | any;
}
export interface Query {
    body?: Obj;
    query?: Obj;
    params?: Array<string>;
}
export interface GridApi extends AgGridReact {

}
export interface Content {
    key: string;
    component: React.ReactElement;
    title?: string | React.ReactElement;
    customClick?(): void;
    isAuth?: boolean;
}
export interface PayloadJumpTab {
    idTab?: string,
    data?: Obj
}
export interface JumpTabAction extends AnyAction {
    type: string;
    payload: PayloadJumpTab
}
export interface PayloadToast {
    show?: boolean;
    message?: string;
    type?: boolean;
    position?: 'top-start' |
    'top-center' |
    'top-end' |
    'middle-start' |
    'middle-center' |
    'middle-end' |
    'bottom-start' |
    'bottom-center' |
    'bottom-end';
}
export interface ToastAction extends AnyAction {
    type: string;
    payload: PayloadToast
}
export interface ViewDetailCourse extends AnyAction {
    type: string;
    payload: {
        id: string
    }
}