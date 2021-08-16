import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import Toolbar from '../Toolbar';
import api from '../../services/api';

// import { Container } from './styles';

const MailEditor: React.FC = () => {
  const emailEditorRef = useRef(null);

  function onExport() {
    emailEditorRef.current.editor.exportHtml((data: any) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  }

  function onLoad() {
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
    api.sendMail(
      'jonas@officesystem.com.br',
      'Assunto teste',
      'Mensagem teste'
    );
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
