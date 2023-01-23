import { METHOD } from "../../global/enum"
import watchRequest from "../../utils/saga"
import { HEADER_REQUEST } from "../actions"

export function* queryHeader(): Generator {
    return yield watchRequest(HEADER_REQUEST, `/post/$params/comments/$params`, METHOD.GET);
}