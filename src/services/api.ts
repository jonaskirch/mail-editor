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
    const formData = new FormData();
    formData.append('host_smtp', process.env.REACT_APP_SMTP_HOST);
    formData.append('usuario_smtp', process.env.REACT_APP_SMTP_USER);
    formData.append('senha_smtp', process.env.REACT_APP_SMTP_PASS);
    formData.append('emailRemetente', 'jonaskirch9@gmail.com');
    formData.append('nomeRemetente', 'Email Teste');
    formData.append('emailDestino', emailDestino);
    formData.append('assunto', assunto);
    formData.append('mensagem', mensagem);
    formData.append('output', 'json');
    await this.axios.post('/api2', formData);
    // await this.axios.post('/api2', {
    //   host_smtp: process.env.REACT_APP_SMTP_HOST,
    //   usuario_smtp: process.env.REACT_APP_SMTP_USER,
    //   senha_smtp: process.env.REACT_APP_SMTP_PASS,
    //   emailRemetente: process.env.REACT_APP_SMTP_USER,
    //   nomeRemetente: 'Mail Teste',
    //   emailDestino,
    //   assunto,
    //   mensagem,
    //   output: 'json',
    // });
  }
}

export default new Api();
