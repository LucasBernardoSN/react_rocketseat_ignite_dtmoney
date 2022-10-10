import * as S from './Dashboard.styles';

import { Summary } from '../Summary/Summary.index';
import { TransactionsTable } from '../TransactionsTable/TransactionsTable.index';

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TransactionsTable />
    </S.Container>
  );
}
