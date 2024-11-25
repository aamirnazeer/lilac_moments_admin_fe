import axios from 'axios';
import { API } from './env.ts';
import { ENDPOINTS } from './endpoints.ts';
import { AxiosRequestConfig } from 'axios';

interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

let isRefreshing = false;
const refreshAndRetryQueue: RetryQueueItem[] = [];

export const api = axios.create({
  baseURL: API,
  timeout: 180000,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest: AxiosRequestConfig = error.config;
    if (error.response && error.response.status === 403 && error.response.data.message === 'jwt expired') {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          await axios.get(`${API}${ENDPOINTS.REFRESH_TOKEN}`, { withCredentials: true });
          refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
            api
              .request(config)
              .then((response) => resolve(response))
              .catch((err) => reject(err));
          });

          refreshAndRetryQueue.length = 0;

          return api(originalRequest);
        } catch (refreshError) {
          console.log(refreshError);
          throw refreshError;
        } finally {
          isRefreshing = false;
        }
      }
      return new Promise<void>((resolve, reject) => {
        refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
      });
    }
    return Promise.reject(error);
  }
);
