import { METHOD } from "../global/enum";
import { Action, Obj } from "../global/interface";
import httpClient from "./axios";

export default async function actionRequest(uri: string, method: METHOD, request: Action) {
    try {
        let response;
        let parseUri = uri;
        const listReqParams = request.payload?.query?.reqParams as Array<string>;
        if (listReqParams && parseUri.includes('$params')) {
            listReqParams.forEach((_, idx) => {
                parseUri = parseUri.replace('$params', (listReqParams)[idx] as string);
            })
            if (parseUri.includes('$params')) {
                throw new Error('Missing $params item');
            }
        }
        switch (method) {
            case METHOD.GET:
                response = httpClient.get(parseUri as string, request.payload?.query?.params).then(
                    (response) => {
                        return response;
                    },
                    (error) => {
                        return error.response;
                    }
                );
                break;
            case METHOD.POST:
                response = httpClient.post(parseUri as string, request.payload?.query?.body, request.payload?.query?.params).then(
                    (response) => {
                        return response;
                    },
                    (error) => {
                        return error.response;
                    }
                );
                break;
            case METHOD.PUT:
                response = httpClient.put(parseUri as string, request.payload?.query?.body, request.payload?.query?.params).then(
                    (response) => {
                        return response;
                    },
                    (error) => {
                        return error.response;
                    }
                );
                break;
            case METHOD.DELETE:
                response = httpClient.delete(parseUri as string, request.payload?.query?.params).then(
                    (response) => {
                        return response;
                    },
                    (error) => {
                        return error.response;
                    }
                );
                break;
        }
        return response;
    } catch (error) {
        return {
            data: {
                message: (error as Obj).message as string
            }
        }
    }
}