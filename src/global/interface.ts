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