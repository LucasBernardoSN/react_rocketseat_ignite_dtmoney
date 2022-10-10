import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../contexts/Transactions.context';

import * as S from './NewTransactionModal.styles';

Modal.setAppElement('#root');

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      amount,
      category,
      title,
      type,
    };

    await createTransaction(data).then(() => {
      setAmount(0);
      setCategory('');
      setTitle('');
      setType('deposit');
      onRequestClose();
    });
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <X
          size={32}
          color="var(--text-title)"
        />
      </button>

      <S.Container onSubmit={(event) => handleCreateNewTransaction(event)}>
        <h2>Cadastrar</h2>

        <input
          type="text"
          name="Título"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          name="Valor"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            activeColor="green"
            type="button"
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
          >
            <ArrowCircleUp
              size={32}
              color={type === 'deposit' ? 'var(--shape)' : 'var(--green)'}
            />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            activeColor="red"
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => setType('withdraw')}
          >
            <ArrowCircleDown
              size={32}
              color={type === 'withdraw' ? 'var(--shape)' : 'var(--red)'}
            />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          type="text"
          name="Categoria"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
