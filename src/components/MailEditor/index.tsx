import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import Toolbar from '../Toolbar';
import api from '../../services/api';
import mergeTags from './mergeTags';

const MailEditor: React.FC = () => {
  const emailEditorRef = useRef(null);

  function onExport() {
    emailEditorRef.current.editor.exportHtml(
      (data: any) => {
        const { design, html } = data;
        console.log('exportHtml', html);
      },
      {
        mergeTags: {
          // 'cliente.nome': 'cliente teste',
          // 'cliente.endereco': 'endereco teste',
          // cliente: {
          //   mergeTags: {
          //     nome: 'cliente teste',
          //     endereco: 'endereco teste',
          //   },
          // },
          testez: 'abcde',
          // 'cobranca.documento': '456681',
          // cliente: {
          //   mergeTags: {
          //     nome: 'Cliente Teste',
          //     // endereco: 'Endereço Teste',
          //   },
          // },
          // cobranca: {
          //   mergeTags: {
          //     documento: '123',
          //     valor: 10.0,
          //     vencimento: '10/10/2021',
          //   },
          // },
        },
      }
    );
  }

  function onLoad() {
    emailEditorRef.current.editor.setMergeTags(mergeTags);
    const layout = localStorage.getItem('maileditor-layout');
    if (layout) {
      emailEditorRef.current.editor.loadDesign(JSON.parse(layout));
    }
  }

  function onSave() {
    emailEditorRef.current.editor.saveDesign((data: any) => {
      localStorage.setItem('maileditor-layout', JSON.stringify(data));
    });
  }

  function onSendMail() {
    emailEditorRef.current.editor.exportHtml((data: any) => {
      const { design, html } = data;
      api.sendMail('jonaskirch9@gmail.com', 'Assunto teste', html);
      console.log('send mail');
    });
  }

  return (
    <div>
      <Toolbar
        onSave={onSave}
        onLoad={onLoad}
        onExport={onExport}
        onSendMail={onSendMail}
      />

      <EmailEditor
        options={{ locale: 'pt-BR' }}
        ref={emailEditorRef}
        onLoad={onLoad}
      />
    </div>
  );
};

export default MailEditor;
