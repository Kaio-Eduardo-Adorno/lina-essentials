import styled from '../../../utils/wrapper-styled-components';
import { CustomScrollBar } from '../../CustomScrollbar';

export const SecondPickerWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  height: 250px;
  flex-direction: column;
  align-items: center;
`;
export const SecondPickerHeader = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  margin: 6px 0 16px;
  font-weight: 700;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const SecondPickerOptions = styled(CustomScrollBar)`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  min-height: 250px;
  flex-direction: column;
  border-color: ${(props) => props.theme.colors.lightGray};
  border-style: solid;
  border-width: 1px;
  align-items: center;
  overflow-y: scroll;
`;
export const SecondPickerOption = styled('button')<{ isSelected?: boolean }>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 60px;

  transition: 600ms;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  user-select: none;
  box-sizing: border-box;

  padding: 8px;
  height: 38px;

  font-size: ${(props) => props.theme.fontSizes.medium};
  border: 1px solid transparent;

  color: ${(props) => (props.isSelected ? props.theme.colors.white : props.theme.colors.darkGray)};
  background: ${(props) =>
    props.isSelected ? props.theme.colors.primary : props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
  }
`;
