import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import Toolbar from '../Toolbar';
import api from '../../services/api';
import mergeTags from './mergeTags';
import replaceMergeTags from './replaceMergeTags';

const MailEditor: React.FC = () => {
  const emailEditorRef = useRef(null);

  function onExport() {
    emailEditorRef.current.editor.exportHtml(
      (data: any) => {
        const { design, html } = data;
        console.log('exportHtml', html);
      },
      {
        mergeTags: replaceMergeTags,
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
    emailEditorRef.current.editor.exportHtml(
      (data: any) => {
        const { design, html } = data;
        api.sendMail('jonaskirch9@gmail.com', 'Assunto teste', html);
        console.log('send mail');
      },
      {
        mergeTags: replaceMergeTags,
      }
    );
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
