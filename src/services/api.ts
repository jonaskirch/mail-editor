import axios, { AxiosInstance } from 'axios';
import config from '../config/api';

class Api {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create(config);
  }

  public async sendMail(to: string, subject: string, message: string) {
    await this.axios.post('/mail/3', {
      to,
      subject,
      message,
    });
  }
}

export default new Api();
