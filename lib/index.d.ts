import { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';
import RequestServiceError from './RequestServiceError';
declare class RequestService {
    static methods: {
        delete: string;
        get: string;
        head: string;
        link: string;
        options: string;
        patch: string;
        post: string;
        purge: string;
        put: string;
        unlink: string;
    };
    static responseTypes: {
        arraybuffer: string;
        blob: string;
        document: string;
        json: string;
        stream: string;
        text: string;
    };
    private axios;
    private readonly config;
    private readonly formData;
    constructor(config?: AxiosRequestConfig & {
        formData?: boolean;
    });
    delete<T = any, R = AxiosResponse<any>>(url: string, options?: AxiosRequestConfig): Promise<R> | void;
    get<T = any, R = AxiosResponse<any>>(url: string, options?: AxiosRequestConfig): Promise<R> | void;
    getUri(options?: AxiosRequestConfig): string;
    head<T = any, R = AxiosResponse<any>>(url: string, options?: AxiosRequestConfig): Promise<R> | void;
    options<T = any, R = AxiosResponse<any>>(url: string, options?: AxiosRequestConfig): Promise<R> | void;
    patch<T = any, R = AxiosResponse<any>>(url: string, data: any, options?: AxiosRequestConfig): Promise<R> | void;
    post<T = any, R = AxiosResponse<any>>(url: string, data: any, options?: AxiosRequestConfig): Promise<R> | void;
    put<T = any, R = AxiosResponse<any>>(url: string, data: any, options?: AxiosRequestConfig): Promise<R> | void;
    request<T = any, R = AxiosResponse<any>>(options: AxiosRequestConfig): Promise<R> | void;
    private prepareData;
}
export default RequestService;
export { CancelToken, RequestServiceError };
