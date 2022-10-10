import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { api } from '../services/api';

type TransactionType = {
  amount: number;
  category: string;
  createdAt: string;
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
};

type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionInputArgs = Omit<TransactionType, 'id' | 'createdAt'>;

type TransactionsContextType = {
  transactions: TransactionType[];
  createTransaction: (transaction: TransactionInputArgs) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = useCallback(
    async (transactionInput: TransactionInputArgs) => {
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date(),
      });
      const { data: newTransaction } = response;
      setTransactions((old) => [...old, newTransaction]);
    },
    []
  );

  const providerValues = useMemo(
    () => ({
      transactions,
      createTransaction,
    }),
    [transactions, createTransaction]
  );

  return (
    <TransactionsContext.Provider value={providerValues}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
