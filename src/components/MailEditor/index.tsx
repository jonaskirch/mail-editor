import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import Toolbar from '../Toolbar';
import api from '../../services/api';

// import { Container } from './styles';

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
          testez: 'abcde',
          'cliente.nome': 'cliente teste',
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
    emailEditorRef.current.editor.setMergeTags({
      testez: {
        name: 'Teste qualquer',
        value: '{{teste}}',
      },
      cliente: {
        name: 'Cliente',
        mergeTags: {
          nome: {
            name: 'Nome completo',
            value: '{{cliente.nome}}',
          },
          endereco: {
            name: 'Endereço completo',
            value: '{{cliente.endereco}}',
          },
        },
      },
      cobranca: {
        name: 'Cobrança',
        mergeTags: {
          documento: {
            name: 'Documento',
            value: '{{cobranca.documento}}',
          },
          valor: {
            name: 'Valor',
            value: '{{cobranca.valor}}',
          },
          vencimento: {
            name: 'Vencimento',
            value: '{{cobranca.vencimento}}',
          },
        },
      },
    });
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
    api.sendMail('jonaskirch9@gmail.com', 'Assunto teste', 'Mensagem teste');
    console.log('send mail');
  }

  return (
    <div>
      <Toolbar
        onSave={onSave}
        onLoad={onLoad}
        onExport={onExport}
        onSendMail={onSendMail}
      />

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
    </div>
  );
};

export default MailEditor;
