import styled from '../../utils/wrapper-styled-components';

export const CustomTable = styled('table')`
  min-width: 100%;
  border-collapse: separate;
  border-spacing: 0px 8px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  color: #666666;
  font-weight: 400;
`;

export const TableRowBorderLeft = styled('td')`
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  padding-left: 2px;
  padding-right: 2px;
  border-width: 2px;
  width: 0px;
  max-width: 0px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

export const TableRowBorderRight = styled('td')`
  background: white;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  padding-left: 2px;
  padding-right: 2px;
  border-width: 2px;
  width: 0px;
  max-width: 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

export const TableHeaderColumn = styled('th')`
  text-transform: uppercase;
  text-align: left;
  padding-top: 16px /* 16px */;
  padding-bottom: 8px /* 16px */;
  padding-right: 8px;
  width: auto;
  :nth-child(2) {
    padding-left: 20px;
  }
`;

export const TableRow = styled('tr')`
  position: relative;
  overflow: hidden;
  padding: 14px 0px 14px 24px;
  border-radius: 4px;

  td {
    background: white;
    transition: 500ms;
  }
  &:hover {
    td {
      background: gray;
    }
  }
`;

export const TableCell = styled('td')`
  padding-top: 1rem /* 16px */;
  padding-bottom: 1rem /* 16px */;
  padding-right: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  &:nth-child(2) {
    color: #212121;
    padding-left: 20px;
  }
`;

export const DeleteButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #d7d0f0;
  background-color: #eeeafc;
  color: #8667ec;
  width: 51px;
  height: 51px;
  margin-left: 8px;
  border-radius: 4px;
`;
export const DeleteButtonWrapper = styled('td')`
  /* border: 1px solid #8667ec; */
  background-color: transparent !important;
  width: 51px;
  margin-left: 20px;
`;
