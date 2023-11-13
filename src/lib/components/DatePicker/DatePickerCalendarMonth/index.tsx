import { useMonth } from '@datepicker-react/hooks';
import Day from '../DatePickerCalendarDay';
import Icon from '../../Icon';
import {
  CalendarHeader,
  CalendarHeaderButton,
  CalendarHeaderButtons,
  CalendarHeaderMonthYear,
} from './index.style';
import { useEffect, useState } from 'react';

const weekDaysLabelParse = (weekDayLabel: string) => {
  switch (weekDayLabel) {
    case 'Mo':
      return 'Seg';
    case 'Tu':
      return 'Ter';
    case 'We':
      return 'Qua';
    case 'Th':
      return 'Qui';
    case 'Fr':
      return 'Sex';
    case 'Sa':
      return 'Sab';
    case 'Su':
      return 'Dom';
  }
};

const monthLabelParse = (monthLabel: string) => {
  switch (monthLabel) {
    case 'January':
      return 'Janeiro';
    case 'February':
      return 'Fevereiro';
    case 'March':
      return 'Março';
    case 'April':
      return 'Abril';
    case 'May':
      return 'Maio';
    case 'June':
      return 'Junho';
    case 'July':
      return 'Julho';
    case 'August':
      return 'Agosto';
    case 'September':
      return 'Setembro';
    case 'October':
      return 'Outubro';
    case 'November':
      return 'Novembro';
    case 'December':
      return 'Dezembro';
  }
};

const getPreviousMonthNumber: (month: number, year: number) => { month: number; year: number } = (
  month,
  year,
) => {
  if (month === 1)
    return {
      month: 12,
      year: year - 1,
    };
  return {
    month: month - 1,
    year: year,
  };
};

const getNextMonthNumber: (month: number, year: number) => { month: number; year: number } = (
  month,
  year,
) => {
  if (month === 12)
    return {
      month: 1,
      year: year + 1,
    };
  return {
    month: month + 1,
    year: year,
  };
};

type dayType =
  | number
  | {
      dayLabel: string;
      date: Date;
      isOtherMonth?: boolean;
    };

function Month({ year, month, firstDayOfWeek, goToPreviousMonths, goToNextMonths }: any) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });
  const { days: previousDays } = useMonth({
    ...getPreviousMonthNumber(month, year),
    firstDayOfWeek,
  });
  const { days: nextDays } = useMonth({
    ...getNextMonthNumber(month, year),
    firstDayOfWeek,
  });
  console.log(getPreviousMonthNumber(year, month));
  console.log(getNextMonthNumber(year, month));

  const [daysToRender, setDaysToRender] = useState<dayType[]>([]);

  useEffect(() => {
    const newDaysToRender: dayType[] = [...days.filter((day) => day !== 0)];
    const previousDaysCache: dayType[] = [...previousDays];
    const nextDaysCache: dayType[] = [...nextDays.filter((day) => day !== 0)];
    const daysBefore = days.filter((day) => day === 0);
    daysBefore.forEach(() => {
      const popedPreviousDay = previousDaysCache.pop();
      if (popedPreviousDay && typeof popedPreviousDay === 'object')
        newDaysToRender.unshift({ ...popedPreviousDay, isOtherMonth: true });
    });
    while (newDaysToRender.length < 42) {
      const shiftedNextDay = nextDaysCache.shift();
      if (shiftedNextDay && typeof shiftedNextDay === 'object')
        newDaysToRender.push({ ...shiftedNextDay, isOtherMonth: true });
    }
    setDaysToRender(newDaysToRender);
  }, [days, previousDays, nextDays]);

  useEffect(() => {
    console.log(daysToRender);
  }, [daysToRender]);

  return (
    <>
      <CalendarHeader>
        <CalendarHeaderButtons>
          <CalendarHeaderButton
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousMonths();
            }}
          >
            <Icon icon='chevron_left' size='16px' />
          </CalendarHeaderButton>
        </CalendarHeaderButtons>
        <CalendarHeaderMonthYear>
          {`${monthLabelParse(monthLabel.split(' ')[0])} ${monthLabel.split(' ')[1]}`}
        </CalendarHeaderMonthYear>
        <CalendarHeaderButtons>
          <CalendarHeaderButton
            onClick={(e) => {
              e.stopPropagation();
              goToNextMonths();
            }}
          >
            <Icon icon='chevron_right' size='16px' />
          </CalendarHeaderButton>
        </CalendarHeaderButtons>
      </CalendarHeader>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          justifyContent: 'center',
          marginBottom: '10px',
          fontSize: '10px',
        }}
      >
        {weekdayLabels.map((dayLabel) => (
          <div style={{ textAlign: 'center' }} key={dayLabel}>
            {weekDaysLabelParse(dayLabel)}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          justifyContent: 'center',
        }}
      >
        {daysToRender.map((day, index) => {
          if (typeof day === 'object') {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
                isOtherMonth={day.isOtherMonth === true}
              />
            );
          }
          return <div key={index} />;
        })}
      </div>
    </>
  );
}

export default Month;
