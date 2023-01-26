import { Action } from "global/interface";

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
                return null;
        }
    }
}
export default createReducer;