import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
declare class RequestServiceError<T = any> extends Error {
    code?: string;
    config: AxiosRequestConfig;
    isAxiosError: boolean;
    name: string;
    request?: any;
    response?: AxiosResponse<T>;
    toJSON: () => object;
    constructor(AxiosError: AxiosError);
}
export default RequestServiceError;
