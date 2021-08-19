export default {
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
};
