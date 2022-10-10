import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    .row {
      box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.withdraw {
        color: var(--red);
      }
      &.deposit {
        color: var(--green);
      }
    }
  }
`;
