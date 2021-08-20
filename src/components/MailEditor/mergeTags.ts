export default {
  customer: {
    name: 'Nome do cliente',
    value: '{{cliente.nome}}',
  },
  document: {
    name: 'Documento',
    value: '{{cobranca.documento}}',
  },
  amount: {
    name: 'Valor',
    value: '{{cobranca.valor}}',
  },
  dueDate: {
    name: 'Vencimento',
    value: '{{cobranca.vencimento}}',
  },
};
