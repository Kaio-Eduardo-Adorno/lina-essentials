import { useRef, useContext } from 'react';
import { useDay } from '@datepicker-react/hooks';
import { DatepickerContext } from '../DatePickerCalendarContext';
import { DayButton } from './index.style';

interface IDay {
  dayLabel: string;
  date: Date;
  isOtherMonth?: boolean;
}

function Day({ dayLabel, date, isOtherMonth = false }: IDay) {
  const dayRef = useRef(null);
  const {
    state,
    type,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  if (!dayLabel) {
    return <div>0</div>;
  }

  return (
    <DayButton
      datePickerType={type}
      isFirstSelected={state?.startDate?.getTime() === date.getTime()}
      isLastSelected={state?.endDate?.getTime() === date.getTime()}
      isSelected={isSelected}
      isSelectedStartOrEnd={isSelectedStartOrEnd}
      isWithinHoverRange={type === 'single' ? false : isWithinHoverRange}
      isDisabled={disabledDate}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type='button'
      ref={dayRef}
      isOtherMonth={isOtherMonth}
    >
      {dayLabel}
    </DayButton>
  );
}

export default Day;
