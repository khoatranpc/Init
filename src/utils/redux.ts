import { Action, Obj } from "global/interface";
import { AnyAction } from "redux";

const createReducer = (success: string, failed: string, clear?: string) => {
    return (state: Record<string, unknown> | null = null, action: Action) => {
        switch (action.type) {
            case success:
                delete action.payload;
                return {
                    ...state,
                    ...action,
                }
            case failed:
                return {
                    ...state,
                    ...action,
                    success: false,
                    response: null
                }
            case clear:
                return null;
            default:
                return state;
        }
    }
}

const createGlobalReducer = (request: string, clear?: string) => {
    return (state: Obj | null = null, action: AnyAction) => {
        switch (action.type) {
            case request:
                return {
                    ...state,
                    ...action.payload
                }
            case clear:
                return null;
            default:
                return state;
        }
    }
}

export { createGlobalReducer };
export default createReducer;