export type RequestMethod = 'get' | 'post';
export interface RequestConfig {
  url: string;
  method?: RequestMethod;
  baseURL?: string;
  headers?: { [headerKey: string]: string };
  timeout?: number;
  data?: any;
}
