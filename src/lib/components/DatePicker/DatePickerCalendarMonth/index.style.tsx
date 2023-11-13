import styled from '../../../utils/wrapper-styled-components';

export const CalendarHeader = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 22px;
  align-items: center;
  margin: 0 0 16px;
`;

export const CalendarHeaderMonthYear = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  font-weight: 700;
`;

export const CalendarHeaderButtons = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CalendarHeaderButton = styled('button')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0;
  background: transparent;
`;
