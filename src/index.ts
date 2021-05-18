import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';
import objectToFormData                                                         from 'objecttoformdata';

import RequestServiceError from './RequestServiceError';

class RequestService {
  static methods       = {
    delete:  'delete',
    get:     'get',
    head:    'head',
    link:    'link',
    options: 'options',
    patch:   'patch',
    post:    'post',
    purge:   'purge',
    put:     'put',
    unlink:  'unlink',
  };
  static responseTypes = {
    arraybuffer: 'arraybuffer',
    blob:        'blob',
    document:    'document',
    json:        'json',
    stream:      'stream',
    text:        'text',
  };

  private axios: AxiosInstance;
  private readonly config: AxiosRequestConfig;
  private readonly formData: boolean = false;

  constructor(config: AxiosRequestConfig & {formData?: boolean} = {}) {
    const {formData, ...AxiosConfig} = config;

    this.config = {
      ...AxiosConfig,
      withCredentials: true,
    };
    if (typeof formData === 'boolean') {
      this.formData = formData;
    }
    this.axios = axios.create(this.config);

    this.delete  = this.delete.bind(this);
    this.get     = this.get.bind(this);
    this.getUri  = this.getUri.bind(this);
    this.head    = this.head.bind(this);
    this.options = this.options.bind(this);
    this.patch   = this.patch.bind(this);
    this.post    = this.post.bind(this);
    this.put     = this.put.bind(this);
    this.request = this.request.bind(this);
  }

  delete<T = any, R = AxiosResponse<any>>(url: string, options: AxiosRequestConfig = {}): Promise<R> | void {
    try {
      return this.axios.delete<T, R>(url, {...this.config, ...options});
    } catch (error) {
      throw new RequestServiceError(error);
    }
  }

  get<T = any, R = AxiosResponse<any>>(url: string, options: AxiosRequestConfig = {}): Promise<R> | void {
    try {
      return this.axios.get<T, R>(url, {...this.config, ...options});
    } catch (error) {
      throw new RequestServiceError(error);
    }
  }

  getUri(options: AxiosRequestConfig = {}): string {
    return this.axios.getUri({...this.config, ...options});
  }

  head<T = any, R = AxiosResponse<any>>(url: string, options: AxiosRequestConfig = {}): Promise<R> | void {
    try {
      return this.axios.head<T, R>(url, {...this.config, ...options});
    } catch (error) {
      throw new RequestServiceError(error);
    }
  }

  options<T = any, R = AxiosResponse<any>>(url: string, options: AxiosRequestConfig = {}): Promise<R> | void {
    try {
      return this.axios.options<T, R>(url, {...this.config, ...options});
    } catch (error) {
      throw new RequestServiceError(error);
    }
  }

  patch<T = any, R = AxiosResponse<any>>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<R> | void {
    try {
      return this.axios.patch<T, R>(url, this.prepareData(data), {...this.config, ...options});
    } catch (error) {
      throw new RequestServiceError(error);
    }
  }

  post<T = any, R = AxiosResponse<any>>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<R> | void {
    try {
      return this.axios.post<T, R>(url, this.prepareData(data), {...this.config, ...options});
    } catch (error) {
      throw new RequestServiceError(error);
    }
  }

  put<T = any, R = AxiosResponse<any>>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<R> | void {
    try {
      return this.axios.put<T, R>(url, this.prepareData(data), {...this.config, ...options});
    } catch (error) {
      throw new RequestServiceError(error);
    }
  }

  request<T = any, R = AxiosResponse<any>>(options: AxiosRequestConfig): Promise<R> | void {
    try {
      return this.axios.request<T, R>({...this.config, ...options});
    } catch (error) {
      throw new RequestServiceError(error);
    }
  }

  private prepareData(data: any): any {
    if (this.formData) {
      return objectToFormData(data);
    }

    return data;
  }
}

export default RequestService;
export { CancelToken, RequestServiceError };