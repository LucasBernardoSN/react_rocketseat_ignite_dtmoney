import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    background: #d7d7d7;
    color: var(--text-title);
    outline: none;

    &:active {
      box-shadow: 0px 0px 0px 2px var(--text-title);
    }
    &:focus {
      box-shadow: 0px 0px 0px 2px var(--text-title);
    }

    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--purple);
    color: var(--shape);
    border-radius: 0.5rem;
    border: none;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
    outline: none;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus-within,
    &:focus-visible,
    &:focus {
      box-shadow: 0px 0px 0px 2px var(--text-title);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface IRadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const buttonColors = {
  red: '#ff5555',
  green: '#33CC95',
};

export const RadioBox = styled.button<IRadioBoxProps>`
  height: 4rem;
  border: 2px solid var(--text-title);
  border-radius: 0.5rem;
  outline: none;

  &:active,
  &:focus {
    box-shadow: 0px 0px 0px 2px var(--text-title);
  }

  background: ${({ isActive, activeColor }) =>
    isActive ? buttonColors[activeColor] : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.25rem;
    color: ${({ isActive, activeColor }) =>
      isActive ? 'var(--shape)' : buttonColors[activeColor]};
  }
`;
