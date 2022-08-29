import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewModalTransactionOpen, setIsNewModalTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}


