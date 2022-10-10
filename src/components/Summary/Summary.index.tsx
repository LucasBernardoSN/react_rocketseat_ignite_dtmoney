import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react';
import { useTransactions } from '../../contexts/Transactions.context';
import * as S from './Summary.styles';

export function Summary() {
  const { transactions } = useTransactions();

  const depositAmout = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const withdrawAmout = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'withdraw') {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const balance = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      return acc + transaction.amount;
    }
    return acc - transaction.amount;
  }, 0);

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp
            size={32}
            color="var(--green)"
          />
        </header>
        <strong>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(depositAmout)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <ArrowCircleDown
            size={32}
            color="var(--red)"
          />
        </header>
        <strong>
          {'- '}
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(withdrawAmout)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <CurrencyCircleDollar
            size={32}
            color="var(--shape)"
          />
        </header>
        <strong>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(balance)}
        </strong>
      </div>
    </S.Container>
  );
}
