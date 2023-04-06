import { flatten } from 'flat';
import { useEffect, useState } from 'react';
import Icon, { IconType } from '../Icon';
import ToolTip from '../Tooltip';
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
  PrimaryPaginationButton,
  SecondaryPaginationButton,
  TableInfo,
} from './index.style';

export interface TableCellValueProps {
  value: unknown;
  rowData: unknown;
  format?: (toFormat: unknown, rowData: unknown) => string;
  Component?: ({ value, rowData, format }: Omit<TableCellValueProps, 'Component'>) => JSX.Element;
}

const TableCellValue = ({ value, rowData, format, Component }: TableCellValueProps) => {
  if (Component) return <Component value={value} rowData={rowData} />;
  else if (format) return <>{format(value, rowData)}</>;
  return <>{value}</>;
};

export interface TableHeaderProps extends Pick<TableCellValueProps, 'format' | 'Component'> {
  key: string;
  label: string;
}

export interface TableProps {
  headers: TableHeaderProps[];
  data: { [key: string]: unknown }[];
  totalData?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  onItensPerPageChange?: (itensPerPage: number) => void;
  initialItensPerPage?: 5 | 10 | 25 | 50 | 100;
  actions?: {
    icon: IconType;
    tooltip: string;
    action: (rowData: unknown) => void;
    showCondition?: (rowData: unknown) => boolean;
  }[];
}

const Table = ({
  headers,
  data = [],
  onPageChange,
  onItensPerPageChange,
  initialItensPerPage,
  totalData,
  actions,
}: TableProps) => {
  const [pageState, setPage] = useState(1);
  const [itensPerPage, setItensPerPage] = useState<number>(initialItensPerPage || 5);

  useEffect(() => {
    if (onPageChange) onPageChange(pageState);
  }, [onPageChange, pageState]);

  useEffect(() => {
    if (onItensPerPageChange) onItensPerPageChange(itensPerPage);
  }, [onItensPerPageChange, itensPerPage]);

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
              {typeof actions?.length === 'number' && actions?.length > 0 && (
                <TableHeaderColumn scope='col' />
              )}
            </tr>
          </thead>
          {data && data.length > 0 && (
            <tbody>
              {data.map((item, i) => {
                const flattedItem: { [key: string]: unknown } = flatten(item);
                return (
                  <TableRow key={i}>
                    {headers.map((header, i) => (
                      <TableCell key={i}>
                        <TableCellValue
                          value={flattedItem[header.key]}
                          rowData={item}
                          format={header?.format}
                          Component={header?.Component}
                        />
                      </TableCell>
                    ))}

                    {typeof actions?.length === 'number' && actions?.length > 0 && (
                      <ActionButtons>
                        <ActionButtonsContainer>
                          {actions?.map((action, i) => {
                            if (action?.showCondition && action?.showCondition(item))
                              return (
                                <ToolTip text={action.tooltip} position='left' key={i}>
                                  <Icon
                                    icon={action.icon}
                                    size={20}
                                    onClick={() => action.action(item)}
                                  />
                                </ToolTip>
                              );
                          })}
                        </ActionButtonsContainer>
                      </ActionButtons>
                    )}
                  </TableRow>
                );
              })}
            </tbody>
          )}
        </CustomTable>
      </TableContentWrapper>
      {data && data.length === 0 && pageState === 1 && (
        <TableInfo itensPerPage={itensPerPage}>
          <Icon icon='info' size={16} />
          <p>Nenhum registro encontrado</p>
        </TableInfo>
      )}
      {data && data.length === 0 && pageState > 1 && (
        <TableInfo itensPerPage={itensPerPage}>
          <Icon icon='info' size={16} />
          <p>Página sem conteúdo</p>
        </TableInfo>
      )}
      <TableOptions>
        <TotalItems>
          {data && data.length > 0 && (
            <>
              {itensPerPage * pageState - itensPerPage + 1} -{' '}
              {itensPerPage * pageState - itensPerPage + data.length}{' '}
              {totalData && `de ${totalData}`} itens
            </>
          )}
        </TotalItems>

        <PaginationButtons>
          {((data && data.length > 0) || pageState > 1) && (
            <>
              {pageState > 1 && (
                <SecondaryPaginationButton onClick={() => setPage(pageState - 1)}>
                  {pageState - 1}
                </SecondaryPaginationButton>
              )}
              <PrimaryPaginationButton onClick={() => setPage(pageState)}>
                {pageState}
              </PrimaryPaginationButton>
              {((totalData &&
                itensPerPage * pageState - itensPerPage + data.length !== totalData) ||
                data.length === itensPerPage) && (
                <SecondaryPaginationButton onClick={() => setPage(pageState + 1)}>
                  {pageState + 1}
                </SecondaryPaginationButton>
              )}
            </>
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
