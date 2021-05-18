import { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';
import { default as RequestServiceError } from './RequestServiceError';
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
    delete<T = any, R = AxiosResponse<any>>(url: string, options?: AxiosRequestConfig): Promise<R>;
    get<T = any, R = AxiosResponse<any>>(url: string, options?: AxiosRequestConfig): Promise<R>;
    getUri(options?: AxiosRequestConfig): string;
    head<T = any, R = AxiosResponse<any>>(url: string, options?: AxiosRequestConfig): Promise<R>;
    options<T = any, R = AxiosResponse<any>>(url: string, options?: AxiosRequestConfig): Promise<R>;
    patch<T = any, R = AxiosResponse<any>>(url: string, data: any, options?: AxiosRequestConfig): Promise<R>;
    post<T = any, R = AxiosResponse<any>>(url: string, data: any, options?: AxiosRequestConfig): Promise<R>;
    put<T = any, R = AxiosResponse<any>>(url: string, data: any, options?: AxiosRequestConfig): Promise<R>;
    request<T = any, R = AxiosResponse<any>>(options: AxiosRequestConfig): Promise<R>;
    private prepareData;
}
export default RequestService;
export { CancelToken, RequestServiceError };
