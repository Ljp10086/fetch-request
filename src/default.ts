import { RequestConfig } from "./types/request-config";

const DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

const TIMEOUT = 20000;

const defaultConfig: RequestConfig = {
  url: "/",
  baseURL: '',
  timeout: TIMEOUT,
  headers: DEFAULT_CONTENT_TYPE,
}


export default defaultConfig;