import { METHOD } from "global/enum";
import watchRequest from "utils/saga";
import { DATA_COMPANY_REQUEST } from "../../actions";

export function* queryDataCompany(): Generator {
    return yield watchRequest(DATA_COMPANY_REQUEST, '/api/v1/company', METHOD.GET);
}