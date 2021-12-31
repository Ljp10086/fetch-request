import { RequestConfig } from "../types/request-config";
import { mergeConfig } from "../utils";
import defaultConfig from "../default";

const isAbsoluteURL = (url: string) => {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

const buildFullUrl = (baseURL: string, url: string) => {
  return isAbsoluteURL(url) ? url : baseURL + url;
}

export const request = async (config: RequestConfig) => {
  const newConfig = mergeConfig(config, defaultConfig);
  const fullURL = buildFullUrl(config.baseURL ?? '', config.url);
  try {
    const response = await fetch(fullURL, {
      method: newConfig.method ?? 'get',
      headers: newConfig.headers,
      body: newConfig.data && JSON.stringify(newConfig.data)
    });
    return response;
  } catch (error) {
    throw error;
  }
}