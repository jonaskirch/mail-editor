import axios, { AxiosInstance } from 'axios';
import mailConfig from '../config/mail';

class Api {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create(mailConfig);
  }

  public async sendMail(
    emailDestino: string,
    assunto: string,
    mensagem: string
  ) {
    await this.axios.post('/api2', {
      host_smtp: process.env.REACT_APP_SMTP_HOST,
      senha_smtp: process.env.REACT_APP_SMTP_PASS,
      usuario_smtp: process.env.REACT_APP_SMTP_USER,
      output: 'json',
      emailRemetente: process.env.REACT_APP_SMTP_USER,
      nomeRemetente: 'Mail Teste',
      emailDestino,
      assunto,
      mensagem,
    });
  }
}

export default new Api();
