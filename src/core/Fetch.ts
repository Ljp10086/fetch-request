import { RequestConfig, RequestMethod } from "../types/request-config";
import { request } from "../request/http";

class Fetch {
  constructor() { }
  request = request;

  get(url: string, config: RequestConfig) {
    return request({
      ...config,
      url,
      method: 'get'
    });
  }

  post(url: string, config: RequestConfig) {
    return request({
      ...config,
      url,
      method: 'post'
    });
  }
}

Fetch.prototype.request = request;
