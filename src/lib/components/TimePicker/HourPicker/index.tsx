import { useEffect, useState } from 'react';
import {
  HourPickerWrapper,
  HourPickerHeader,
  HourPickerOptions,
  HourPickerOption,
} from './index.style';

interface IHourPicker {
  minHour?: number;
  maxHour?: number;
}

export const HourPicker = ({ minHour = 0, maxHour = 23 }: IHourPicker) => {
  const [hour, setHour] = useState<number>(0);
  const [options, setOptions] = useState<number[]>([1]);

  useEffect(() => {
    const newOptions = [];
    for (let i = minHour; i <= maxHour; i++) {
      newOptions.push(i);
    }

    setOptions(newOptions);
  }, [minHour, maxHour]);

  return (
    <>
      <HourPickerWrapper>
        <HourPickerHeader>Horas</HourPickerHeader>
        <HourPickerOptions>
          {options.map((option, i) => (
            <HourPickerOption key={i} onClick={() => setHour(option)} isSelected={option == hour}>
              {option}
            </HourPickerOption>
          ))}
        </HourPickerOptions>
      </HourPickerWrapper>
    </>
  );
};
