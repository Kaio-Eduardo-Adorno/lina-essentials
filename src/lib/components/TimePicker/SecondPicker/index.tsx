import { useEffect, useState } from 'react';
import {
  SecondPickerWrapper,
  SecondPickerHeader,
  SecondPickerOptions,
  SecondPickerOption,
} from './index.style';

interface ISecondPicker {
  minSecond?: number;
  maxSecond?: number;
}

export const SecondPicker = ({ minSecond = 0, maxSecond = 59 }: ISecondPicker) => {
  const [second, setSecond] = useState<number>(0);
  const [options, setOptions] = useState<number[]>([1]);

  useEffect(() => {
    const newOptions = [];
    for (let i = minSecond; i <= maxSecond; i++) {
      newOptions.push(i);
    }

    setOptions(newOptions);
  }, [minSecond, maxSecond]);

  return (
    <>
      <SecondPickerWrapper>
        <SecondPickerHeader>Segundos</SecondPickerHeader>
        <SecondPickerOptions>
          {options.map((option, i) => (
            <SecondPickerOption
              type='button'
              key={i}
              onClick={() => setSecond(option)}
              isSelected={option == second}
            >
              {option}
            </SecondPickerOption>
          ))}
        </SecondPickerOptions>
      </SecondPickerWrapper>
    </>
  );
};
