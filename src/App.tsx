import { useState } from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { TransactionProvider } from './hooks/useTransactions';
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal }/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen }
        onRequestClose = { handleCloseNewTransactionModal }
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
