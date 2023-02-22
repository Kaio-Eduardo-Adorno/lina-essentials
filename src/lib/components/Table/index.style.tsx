import styled from '../../utils/wrapper-styled-components';

export const TableWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  color: #666666;
  font-weight: 400;
  border-radius: 4px;
  overflow: hidden;
  max-width: 100%;
  background-color: #f0f0f1;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
`;

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
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const CustomTable = styled('table')`
  overflow-x: scroll;
  min-width: 100%;
  max-width: 100%;
  border-collapse: separate;
  border-spacing: 0px 0px;
  table-layout: fixed;
`;

export const TableOptions = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  height: 45px;
`;

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
  z-index: 20;
  white-space: nowrap;
  background-color: #f0f0f1;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  &:first-child {
    padding-left: 20px;
  }
`;

export const TableRow = styled('tr')`
  padding: 14px 0px 14px 24px;
  border-radius: 4px;

  td {
    transition: 500ms;
    background: white;
  }
  :hover {
    td {
      background: gray;
    }
  }
`;

export const TableCell = styled('td')`
  padding-top: 1rem /* 16px */;
  padding-bottom: 1rem /* 16px */;
  padding-right: 8px;
  word-wrap: break-word; /* All browsers since IE 5.5+ */
  overflow-wrap: break-word;
  &:first-child {
    color: #212121;
    padding-left: 20px;
  }
`;

export const TotalItems = styled('div')`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  /* Cinza/Texto_claro */

  color: #9b9b9b;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const PaginationButtons = styled('div')`
  display: flex;
  gap: 16px;
`;

export const ActionButtons = styled('td')`
  background: white;
  padding-left: 20px;
  padding-top: 1rem /* 16px */;
  padding-bottom: 1rem /* 16px */;
  padding-right: 24px;
  word-wrap: break-word; /* All browsers since IE 5.5+ */
  overflow-wrap: break-word;
  right: 0;
  position: -webkit-sticky;
  position: sticky;
`;

export const ActionButtonsContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0px;
  gap: 16px;
  color: #8667ec;
  svg {
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
`;

export const ItensPerPageWrapper = styled('div')`
  display: flex;
  color: #9b9b9b;
  font-size: 14px;
  align-items: center;
  gap: 8px;
`;

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
  color: #8667ec;
  option {
    color: #666666;
  }

  background: #ffffff;
  /* efeito/borda */

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;
