import { flatten } from 'flat';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import {
  TableHeaderColumn,
  TableRow,
  TableCell,
  CustomTable,
  TableWrapper,
  TableOptions,
  TableContentWrapper,
  ActionButtons,
  ActionButtonsContainer,
  TotalItems,
  PaginationButtons,
  ItensPerPageWrapper,
  ItensPerPageSelect,
} from './index.style';

export interface TableProps {
  headers: { key: string; label: string; format?: (toFormat: unknown) => string }[];
  data: { [key: string]: unknown }[];
  totalData: number;
  itensPerPage: number;
  onPageChange?: (page: number) => void;
  onEdit?: (rowData: unknown) => void;
  onView?: (rowData: unknown) => void;
  onDelete?: (rowData: unknown) => void;
}

const Table = ({
  headers,
  data,
  onEdit,
  onView,
  onDelete,
  onPageChange,
  totalData = 3,
}: TableProps) => {
  const [pageState, setPage] = useState(1);
  const [itensPerPage, setItensPerPage] = useState(5);

  useEffect(() => {
    if (onPageChange) onPageChange(pageState);
  }, [onPageChange, pageState]);

  return (
    <TableWrapper>
      <TableContentWrapper>
        <CustomTable>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <TableHeaderColumn key={i} scope='col'>
                  {header.label}
                </TableHeaderColumn>
              ))}
              {(onEdit || onView || onDelete) && <TableHeaderColumn scope='col' />}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              const flattedItem: { [key: string]: unknown } = flatten(item);
              return (
                <TableRow key={i}>
                  {headers.map((header, i) => (
                    <TableCell key={i}>
                      {header?.format
                        ? header.format(flattedItem[header.key])
                        : flattedItem[header.key]}
                    </TableCell>
                  ))}

                  {(onEdit || onView || onDelete) && (
                    <ActionButtons>
                      <ActionButtonsContainer>
                        {onView && <Icon icon='eye' size={20} onClick={onView} />}
                        {onEdit && <Icon icon='pencil' size={20} onClick={onEdit} />}
                        {onDelete && <Icon icon='trash' size={20} onClick={onDelete} />}
                      </ActionButtonsContainer>
                    </ActionButtons>
                  )}
                </TableRow>
              );
            })}
          </tbody>
        </CustomTable>
      </TableContentWrapper>
      <TableOptions>
        <TotalItems>
          {itensPerPage * pageState - itensPerPage + 1} -{' '}
          {itensPerPage * pageState - itensPerPage + data.length} de {totalData} lançamentos
        </TotalItems>
        <PaginationButtons>
          {pageState > 1 && (
            <Button
              styleType='secondary'
              style={{
                justifyContent: 'center',
                padding: '4px 8px',
                height: '24px',
                width: '24px',
              }}
              onClick={() => setPage(pageState - 1)}
            >
              {pageState - 1}
            </Button>
          )}
          <Button
            styleType='primary'
            style={{ justifyContent: 'center', padding: '4px 8px', height: '24px', width: '24px' }}
            onClick={() => setPage(pageState)}
          >
            {pageState}
          </Button>
          {itensPerPage * pageState - itensPerPage + data.length !== totalData && (
            <Button
              styleType='secondary'
              style={{
                justifyContent: 'center',
                padding: '4px 8px',
                height: '24px',
                width: '24px',
              }}
              onClick={() => setPage(pageState + 1)}
            >
              {pageState + 1}
            </Button>
          )}
        </PaginationButtons>
        <ItensPerPageWrapper>
          Exibir
          <ItensPerPageSelect
            onChange={(e) => {
              if (Number(e.target.value)) setItensPerPage(Number(e.target.value));
            }}
          >
            <option value={5}>05 linhas</option>
            <option value={10}>10 linhas</option>
            <option value={25}>25 linhas</option>
            <option value={50}>50 linhas</option>
            <option value={100}>100 linhas</option>
          </ItensPerPageSelect>
        </ItensPerPageWrapper>
      </TableOptions>
    </TableWrapper>
  );
};

export default Table;
