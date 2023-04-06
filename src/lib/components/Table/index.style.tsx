import { defaultTheme } from '../../themes';
import styled from '../../utils/wrapper-styled-components';
import { PrimaryButton, SecondaryButton } from '../Button';

export const TableWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 400;
  border-radius: 4px;
  overflow: hidden;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
`;
TableWrapper.defaultProps = { theme: defaultTheme };

export const TableContentWrapper = styled('div')`
  overflow-y: visible;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 500px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar:horizontal {
    background-color: transparent;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    margin-top: 44px;
    background-color: transparent;
  }
  &::-webkit-scrollbar:vertical {
    background: transparent;
    height: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: transparent;
    box-shadow: inset 0 0 2px ${(props) => `${props.theme.colors.darkGray}40`};
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
TableContentWrapper.defaultProps = { theme: defaultTheme };

export const CustomTable = styled('table')`
  overflow-x: scroll;
  min-width: 100%;
  max-width: 100%;
  border-collapse: separate;
  border-spacing: 0px 0px;
  table-layout: fixed;
`;
CustomTable.defaultProps = { theme: defaultTheme };

export const TableOptions = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  height: 45px;
`;
TableOptions.defaultProps = { theme: defaultTheme };

export const TableHeaderColumn = styled('th')`
  text-transform: uppercase;
  text-align: left;
  padding-top: 16px /* 16px */;
  padding-bottom: 8px /* 16px */;
  padding-right: 8px;
  height: 20px;
  min-height: 20px;
  max-height: 20px;
  width: auto;
  /* z-index: 20; */
  white-space: nowrap;
  background-color: ${(props) => props.theme.colors.background};
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  color: ${(props) => props.theme.colors.darkGray};
  &:first-child {
    padding-left: 20px;
  }
`;
TableHeaderColumn.defaultProps = { theme: defaultTheme };

export const TableRow = styled('tr')`
  padding: 14px 0px 14px 24px;
  border-radius: 4px;

  td {
    transition: 500ms;
    background: ${(props) => props.theme.colors.white};
  }
  :hover {
    td {
      background: ${(props) => props.theme.colors.quaternary};
    }
  }
`;
TableRow.defaultProps = { theme: defaultTheme };

export const TableCell = styled('td')`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 8px;
  word-wrap: break-word; /* All browsers since IE 5.5+ */
  overflow-wrap: break-word;
  color: ${(props) => props.theme.colors.darkGray};
  &:first-child {
    color: ${(props) => props.theme.colors.black};
    padding-left: 20px;
  }
`;
TableCell.defaultProps = { theme: defaultTheme };

export const TotalItems = styled('div')`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
`;
TotalItems.defaultProps = { theme: defaultTheme };

export const PaginationButtons = styled('div')`
  display: flex;
  gap: 16px;
`;
PaginationButtons.defaultProps = { theme: defaultTheme };

export const ActionButtons = styled('td')`
  background: ${(props) => props.theme.colors.white};
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 24px;
  word-wrap: break-word; /* All browsers since IE 5.5+ */
  overflow-wrap: break-word;
  right: 0;
  position: -webkit-sticky;
  position: sticky;
`;
ActionButtons.defaultProps = { theme: defaultTheme };

export const ActionButtonsContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0px;
  gap: 16px;
  color: ${(props) => props.theme.colors.primary};
  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.primary};
    &:hover {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;
ActionButtonsContainer.defaultProps = { theme: defaultTheme };

export const ItensPerPageWrapper = styled('div')`
  display: flex;
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSizes.medium};
  align-items: center;
  gap: 8px;
`;
ItensPerPageWrapper.defaultProps = { theme: defaultTheme };

export const ItensPerPageSelect = styled('select')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;
  outline: none;
  border: none;

  width: 101px;
  height: 32px;
  color: ${(props) => props.theme.colors.primary};
  option {
    color: ${(props) => props.theme.colors.darkGray};
  }

  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;
ItensPerPageSelect.defaultProps = { theme: defaultTheme };

export const PrimaryPaginationButton = styled(PrimaryButton)`
  justify-content: center;
  padding: 4px 8px;
  height: 24px;
  width: 24px;
`;

export const SecondaryPaginationButton = styled(SecondaryButton)`
  justify-content: center;
  padding: 4px 8px;
  height: 24px;
  width: 24px;
  background: none;
  border: 1px transparent;
  color: ${(props) => props.theme.colors.gray};
  :hover {
    text-decoration: underline;
    background: none;
    border: 1px transparent;
    color: ${(props) => props.theme.colors.gray};
  }
  :focus {
    background: none;
    border: 1px transparent;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const TableInfo = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: ${(props: { itensPerPage?: number }) =>
    `calc(19px * ${props.itensPerPage ? props.itensPerPage : 1})`};
  /* 19px; */
  padding-top: ${(props: { itensPerPage?: number }) =>
    `calc(16px * ${props.itensPerPage ? props.itensPerPage : 1})`};
  /* 16px; */
  padding-bottom: ${(props: { itensPerPage?: number }) =>
    `calc(16px * ${props.itensPerPage ? props.itensPerPage : 1})`};
  /* 16px; */
  padding-right: 8px;

  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray};
`;
TableInfo.defaultProps = { theme: defaultTheme };
