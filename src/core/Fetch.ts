import { RequestConfig, RequestMethod } from "../types/request-config";
import { baseRequest } from "../request/http";
import { InterceptorManager } from './interceptor';
export class Fetch {
  interceptors: {
    request: InterceptorManager<unknown>;
    response: InterceptorManager<unknown>;
  };
  constructor() {
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    }
  }

  async request(config: RequestConfig) {
    try {
      let result: Response | unknown = await baseRequest.call(this, config);
      this.interceptors.response.interceptors.forEach((responseInterceptor) => {
        result = responseInterceptor.onFillFulled!(result);
      });

      return result;
    } catch (error) {
      let errorResult = error;
      this.interceptors.response.interceptors.forEach((responseInterceptor) => {
        errorResult = responseInterceptor.onRejected!(errorResult);
      })      
    }
  } 

  get(url: string, config: RequestConfig) {
    return this.request({
      ...config,
      url,
      method: 'get'
    });
  }

  post(url: string, config: RequestConfig) {
    return this.request({
      ...config,
      url,
      method: 'post'
    });
  }
}
