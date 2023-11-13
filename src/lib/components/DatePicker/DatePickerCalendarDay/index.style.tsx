import { DatePickerTypes } from '..';
import styled from '../../../utils/wrapper-styled-components';

const getColor = (
  colors: {
    selectedFirstOrLastColor: string;
    normalColor: string;
    selectedColor: string;
    rangeHoverColor: string;
    disabledColor: string;
  },
  isSelected: boolean,
  isSelectedStartOrEnd: any,
  isWithinHoverRange: boolean,
  isDisabled: boolean,
  isOtherMonth: boolean,
) => {
  return () => {
    if (isSelectedStartOrEnd) {
      return colors.selectedFirstOrLastColor;
    } else if (isSelected) {
      return colors.selectedColor;
    } else if (isWithinHoverRange) {
      return colors.rangeHoverColor;
    } else if (isDisabled || isOtherMonth) {
      return colors.disabledColor;
    } else {
      return colors.normalColor;
    }
  };
};

const getBorderRadius = (
  type: DatePickerTypes,
  isFirstSelected: boolean,
  isLastSelected: boolean,
) => {
  if (type === 'single') {
    return '4px';
  } else if (isFirstSelected) {
    return '4px 0px 0px 4px';
  } else if (isLastSelected) {
    return '0px 4px 4px 0px';
  } else {
    return '0px';
  }
};

export interface IDayButton {
  datePickerType: DatePickerTypes;
  isSelected: boolean;
  isSelectedStartOrEnd: any;
  isWithinHoverRange: boolean;
  isDisabled: boolean;
  isFirstSelected: boolean;
  isLastSelected: boolean;
  isOtherMonth: boolean;
}

export const DayButton = styled('button')<IDayButton>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${(props) =>
    getBorderRadius(props.datePickerType, props.isFirstSelected, props.isLastSelected)};
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

  color: ${(props) =>
    getColor(
      {
        normalColor: props.theme.colors.darkGray,
        disabledColor: props.theme.colors.lightGray,
        selectedColor: props.theme.colors.darkGray,
        rangeHoverColor: props.theme.colors.darkGray,
        selectedFirstOrLastColor: props.theme.colors.white,
      },
      props.isSelected,
      props.isSelectedStartOrEnd,
      props.isWithinHoverRange,
      props.isDisabled,
      props.isOtherMonth,
    )};
  background: ${(props) =>
    getColor(
      {
        normalColor: props.theme.colors.white,
        disabledColor: props.theme.colors.white,
        selectedColor: props.theme.colors.quaternary,
        rangeHoverColor: props.theme.colors.quaternary,
        selectedFirstOrLastColor: props.theme.colors.primary,
      },
      props.isSelected,
      props.isSelectedStartOrEnd,
      props.isWithinHoverRange,
      props.isDisabled,
      props.isOtherMonth,
    )};

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
  }
`;
