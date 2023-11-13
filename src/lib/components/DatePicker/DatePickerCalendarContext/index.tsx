import React from 'react';
import {} from '@datepicker-react/hooks';
import { DatePickerTypes, IDatePickerState } from '..';

interface IDatepickerContext {
  type: DatePickerTypes;
  state: IDatePickerState;
  focusedDate: Date | null;
  isDateFocused: (date: Date) => boolean;
  isDateSelected: (date: Date) => boolean;
  isDateHovered: (date: Date) => boolean;
  isDateBlocked: (date: Date) => boolean;
  isFirstOrLastSelectedDate: (date: Date) => boolean;
  onDateFocus: (date: Date) => void;
  onDateHover: (date: Date) => void;
  onDateSelect: (date: Date) => void;
}

export const datepickerContextDefaultValue: IDatepickerContext = {
  type: 'single',
  state: { startDate: null, endDate: null, focusedInput: 'startDate' },
  focusedDate: null,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDateFocus: () => {
    return;
  },
  onDateHover: () => {
    return;
  },
  onDateSelect: () => {
    return;
  },
};

export const DatepickerContext = React.createContext(datepickerContextDefaultValue);
