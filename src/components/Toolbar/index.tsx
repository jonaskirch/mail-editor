import React from 'react';

import { Container, Button } from './styles';

interface Props {
  onSave: () => void;
  onLoad: () => void;
  onExport: () => void;
  onSendMail: () => void;
}

const Toolbar: React.FC<Props> = ({
  onSave,
  onLoad,
  onExport,
  onSendMail,
}: Props) => {
  return (
    <Container>
      <Button onClick={onSave}>Salvar Layout</Button>
      <Button onClick={onLoad}>Carregar Layout</Button>
      <Button onClick={onExport}>Exportar HTML</Button>
      <Button onClick={onSendMail}>Enviar e-mail teste</Button>
    </Container>
  );
};

export default Toolbar;
