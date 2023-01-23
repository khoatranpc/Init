import { METHOD } from "../../../global/enum";
import watchRequest from "../../../utils/saga";
import { USER_CREATE_REQUEST } from "../../actions";

export function* queryUserCreate(): Generator {
    return yield watchRequest(USER_CREATE_REQUEST, '/api/v1/user', METHOD.PUT);
}