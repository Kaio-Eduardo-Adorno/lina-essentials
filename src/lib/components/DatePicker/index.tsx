import { useDatepicker, FocusedInput } from '@datepicker-react/hooks';
import { useEffect, useState } from 'react';
import { DatepickerContext } from './DatePickerCalendarContext';
import Month from './DatePickerCalendarMonth';
import { TimePicker } from '../TimePicker';
import { DatePickerCalendarWrapper, DatePickerWrapper } from './index.style';

export type DatePickerTypes = 'range' | 'single';

export interface DatePickerProps {
  type?: DatePickerTypes;
  onChange?: (date: Date) => void;
  onStartDateChange?: (date: Date) => void;
  onEndDateChange?: (date: Date) => void;
}

export interface IDatePickerState {
  startDate: any;
  endDate: any;
  focusedInput: FocusedInput;
}

const DatePicker = ({ type = 'range', onStartDateChange, onEndDateChange }: DatePickerProps) => {
  const [state, setState] = useState<IDatePickerState>({
    startDate: null,
    endDate: null,
    focusedInput: 'startDate',
  });
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
    firstDayOfWeek: 0,
    // maxBookingDate: new Date(),
    // minBookingDate: new Date('2023-04-12'),
    // minBookingDays: 3,
  });

  function handleDateChange(data: IDatePickerState) {
    if (type === 'single') {
      setState({ startDate: data.startDate, endDate: null, focusedInput: 'startDate' });
    } else if (!data.focusedInput) {
      setState({ ...data, focusedInput: 'startDate' });
    } else {
      setState(data);
    }
  }

  useEffect(() => {
    if (onStartDateChange) onStartDateChange(state.startDate);
  }, [state.startDate, onStartDateChange]);
  useEffect(() => {
    if (onEndDateChange) onEndDateChange(state.endDate);
  }, [state.endDate, onEndDateChange]);

  return (
    <DatepickerContext.Provider
      value={{
        type,
        state,
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      {/* DEMO ------------------------> */}
      <div>
        <strong>Focused input: </strong>
        {state.focusedInput}
      </div>
      <div>
        <strong>Start date: </strong>
        {state.startDate && state.startDate.toLocaleString()}
      </div>
      <div>
        <strong>End date: </strong>
        {state.endDate && state.endDate.toLocaleString()}
      </div>
      {/* DEMO <------------------------ */}

      <DatePickerWrapper>
        <DatePickerCalendarWrapper>
          <Month
            key={`${activeMonths[0].year}-${activeMonths[0].month}`}
            year={activeMonths[0].year}
            month={activeMonths[0].month}
            firstDayOfWeek={firstDayOfWeek}
            goToPreviousMonths={goToPreviousMonths}
            goToNextMonths={goToNextMonths}
          />
        </DatePickerCalendarWrapper>
        {/* TODO: Criar um timepicker decente
            <TimePicker /> 
        */}
      </DatePickerWrapper>
    </DatepickerContext.Provider>
  );
};

export default DatePicker;
