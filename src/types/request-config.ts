export interface RequestConfig {
  url: string;
  method?: 'get' | 'post';
  baseURL?: string;
  headers?: { [headerKey: string]: string };
  timeout?: number;
  data?: any;
}
