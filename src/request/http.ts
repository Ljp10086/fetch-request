import { RequestConfig } from "../types/request-config";
import { mergeConfig } from "../utils";
import defaultConfig from "../default";

const isAbsoluteURL = (url: string) => {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

const buildFullUrl = (baseURL: string, url: string) => {
  return isAbsoluteURL(url) ? url : baseURL + url;
}

export const baseRequest = async (config: RequestConfig) => {
  console.log(config);
  
  const newConfig = mergeConfig(config, defaultConfig);
  const fullURL = buildFullUrl(config.baseURL ?? '', config.url);
  console.log(fullURL);
  let response = null;
  response = await fetch(fullURL, {
    method: newConfig.method ?? 'get',
    headers: newConfig.headers,
    body: newConfig.data && JSON.stringify(newConfig.data)
  });
  return response;
}