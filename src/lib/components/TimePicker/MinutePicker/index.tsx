import { useEffect, useState } from 'react';
import {
  MinutePickerWrapper,
  MinutePickerHeader,
  MinutePickerOptions,
  MinutePickerOption,
} from './index.style';

interface IMinutePicker {
  minMinute?: number;
  maxMinute?: number;
}

export const MinutePicker = ({ minMinute = 0, maxMinute = 59 }: IMinutePicker) => {
  const [minute, setMinute] = useState<number>(0);
  const [options, setOptions] = useState<number[]>([1]);

  useEffect(() => {
    const newOptions = [];
    for (let i = minMinute; i <= maxMinute; i++) {
      newOptions.push(i);
    }

    setOptions(newOptions);
  }, [minMinute, maxMinute]);

  return (
    <>
      <MinutePickerWrapper>
        <MinutePickerHeader>Minutos</MinutePickerHeader>
        <MinutePickerOptions>
          {options.map((option, i) => (
            <MinutePickerOption
              key={i}
              onClick={() => setMinute(option)}
              isSelected={option == minute}
            >
              {option}
            </MinutePickerOption>
          ))}
        </MinutePickerOptions>
      </MinutePickerWrapper>
    </>
  );
};
