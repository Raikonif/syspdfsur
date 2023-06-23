import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { VITE_BASE_URL_MOCK } from "~/service/service.constants";

const serviceJson = axios.create({
  baseURL: VITE_BASE_URL_MOCK,
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
  return <InternalAxiosRequestConfig<any>>config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

serviceJson.interceptors.request.use(onRequest, onRequestError);
serviceJson.interceptors.response.use(onResponse, onResponseError);

export { serviceJson };
