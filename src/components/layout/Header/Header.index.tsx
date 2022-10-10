import * as S from './Header.styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img
          src="./assets/logo.svg"
          alt="logo dt money"
        />
        <button
          onClick={onOpenNewTransactionModal}
          type="button"
        >
          Nova Transação
        </button>
      </S.Content>
    </S.Container>
  );
}
