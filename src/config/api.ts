import { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_MAIL_API,
  headers: {
    'Content-Type': 'application/json',
  },
};

export default config;
