import { RequestConfig } from './types/request-config';

export const mergeConfig = (config: RequestConfig, defaultConfig: RequestConfig) => 
  Object.assign(defaultConfig, config);