import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class RequestServiceError<T = any> extends Error {
  code?: string;
  config: AxiosRequestConfig;
  isAxiosError: boolean;
  name = 'RequestError';
  request?: any;
  response?: AxiosResponse<T>;
  toJSON: () => object;

  constructor(AxiosError: AxiosError) {
    super(AxiosError.code || AxiosError.message);

    const {code, config, isAxiosError, request, response, toJSON} = AxiosError;

    this.code         = code;
    this.config       = config;
    this.isAxiosError = isAxiosError;
    this.request      = request;
    this.response     = response;
    this.toJSON       = toJSON;
  }
}

export default RequestServiceError;