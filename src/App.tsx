import { useState } from 'react';
import { Model, createServer } from 'miragejs';

import { Dashboard } from './components/Dashboard/Dashboard.index';
import { Header } from './components/layout/Header/Header.index';
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal.index';
import { TransactionsProvider } from './contexts/Transactions.context';
import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salario',
          type: 'deposit',
          category: 'Trabalho',
          amount: 5000,
          createdAt: new Date('2020-01-01 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 600,
          createdAt: new Date('2020-01-01 09:00:00'),
        },
        {
          id: 3,
          title: 'Comida',
          type: 'withdraw',
          category: 'Casa',
          amount: 300,
          createdAt: new Date('2020-01-01 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const { attrs } = schema.create('transaction', data);
      return attrs;
    });
  },
});

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <TransactionsProvider>
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={() => handleCloseNewTransactionModal()}
        />
        <Header
          onOpenNewTransactionModal={() => handleOpenNewTransactionModal()}
        />
        <Dashboard />
      </TransactionsProvider>
    </>
  );
}
