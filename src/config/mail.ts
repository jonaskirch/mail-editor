import { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_SMTP_API,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

export default config;
