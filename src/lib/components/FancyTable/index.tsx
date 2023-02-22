import Icon from '../Icon';
import {
  TableRowBorderRight,
  TableHeaderColumn,
  TableRowBorderLeft,
  TableRow,
  TableCell,
  CustomTable,
  DeleteButton,
  DeleteButtonWrapper,
} from './index.style';

const FancyTable = ({ data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }: { data: unknown[] }) => {
  return (
    <CustomTable>
      <tr>
        <th />
        <TableHeaderColumn scope='col'>aaa</TableHeaderColumn>
        <TableHeaderColumn scope='col'>aaa</TableHeaderColumn>
        <TableHeaderColumn scope='col'>aaa</TableHeaderColumn>
        <TableHeaderColumn scope='col'>aaa</TableHeaderColumn>
        <TableHeaderColumn scope='col'>aaa</TableHeaderColumn>
        <TableHeaderColumn scope='col'>aaa</TableHeaderColumn>
        <TableHeaderColumn scope='col' />
      </tr>

      {data.map((item, i) => {
        return (
          <TableRow key={i}>
            <TableRowBorderLeft />
            <TableCell>a</TableCell>
            <TableCell>aaaaa</TableCell>
            <TableCell>aaaaa</TableCell>
            <TableCell>aaaaa</TableCell>
            <TableCell>aaaaa</TableCell>
            <TableCell>aaaaa</TableCell>
            <TableRowBorderRight />
            <DeleteButtonWrapper>
              <DeleteButton>
                <Icon icon='trash' size={20} />
              </DeleteButton>
            </DeleteButtonWrapper>
          </TableRow>
        );
      })}
    </CustomTable>
  );
};

export default FancyTable;
