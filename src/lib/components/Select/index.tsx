import { useEffect, useState } from 'react';
import Icon from '../Icon';
import { InputErrorMessage } from '../InputErrorMessage';
import { Label } from '../InputText/index.style';
import { ToolTipButton, ToolTipWrapper } from '../LabelTooltip';
import ToolTip from '../Tooltip';
import {
  SelectContainer,
  SelectInput,
  SelectInputContainer,
  SelectInputValue,
  SelectOption,
  SelectOptionsContainer,
  SelectWrapper,
} from './index.style';

export interface SelectProps {
  label?: { text: string; tooltip?: string };
  disabled?: boolean;
  readOnly?: boolean;
  searchable?: boolean;
  multi?: boolean;
  options: { label: string; value: any }[];
  selectedValue?: any;
  error?: string;
  onChange: (v: any) => void;
  [x: string]: any;
}

type CurrentOptionType = { label: string; value: any }[] | { label: string; value: any };

const Select = ({
  options,
  onChange,
  searchable,
  multi,
  selectedValue = null,
  label,
  disabled = false,
  readOnly = false,
  error,
  ...rest
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [currentOption, setCurrentOption] = useState<CurrentOptionType>(
    multi ? [] : { label: '', value: null },
  );

  const selectedLabels = Array.isArray(currentOption)
    ? currentOption.map((option) => option.label).join(', ')
    : currentOption.label;

  useEffect(() => {
    if (!multi && !Array.isArray(currentOption)) onChange(currentOption.value);
    else if (multi && Array.isArray(currentOption))
      onChange(currentOption.map((option) => option.value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOption]);

  useEffect(() => {
    const optionToSelect = options.findIndex((opt) => opt.value === selectedValue);
    if (optionToSelect !== -1) setCurrentOption(options[optionToSelect]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  return (
    <SelectWrapper>
      {label?.text && (
        <Label>
          {label?.text}
          {label?.tooltip && (
            <ToolTipWrapper>
              <ToolTip text={label.tooltip}>
                <ToolTipButton>?</ToolTipButton>
              </ToolTip>
            </ToolTipWrapper>
          )}
        </Label>
      )}

      <SelectContainer>
        <SelectInputContainer
          onClick={() => setOpen(!open)}
          disabled={disabled}
          readOnly={readOnly}
        >
          <SelectInput
            onChange={(e) => {
              setFilter(e.target.value);
              setOpen(true);
            }}
            placeholder='Selecione'
            search={searchable}
            disabled={disabled}
            readOnly={readOnly}
            value={open ? filter : selectedLabels}
          />
          <SelectInputValue
            onChange={() => null}
            disabled={disabled}
            readOnly={readOnly}
            {...rest}
          />
          <Icon icon='chevron_down' size={22} />
        </SelectInputContainer>
        <SelectOptionsContainer open={open}>
          <SelectOption
            onClick={() => {
              setOpen(false);
              if (multi) {
                setCurrentOption([]);
                return;
              }
              setCurrentOption({ label: '', value: null });
            }}
          >
            Selecione
          </SelectOption>
          {options.map((option, i) => {
            const onSelectOption = () => {
              setFilter('');
              setOpen(false);
              if (multi) {
                if (Array.isArray(currentOption)) {
                  if (currentOption.findIndex((cOption) => option.value === cOption.value) !== -1) {
                    setCurrentOption(
                      currentOption.filter((cOption) => option.value !== cOption.value),
                    );
                    return;
                  }
                  setCurrentOption([...currentOption, option]);
                }
                return;
              }
              setCurrentOption(option);
            };

            const selected = Array.isArray(currentOption)
              ? currentOption.findIndex((cOption) => cOption.value === option.value) !== -1
              : currentOption.value === option.value;

            if (filter) {
              if (option.label.includes(filter)) {
                return (
                  <SelectOption key={i} selected={selected} onClick={onSelectOption}>
                    {option.label}
                  </SelectOption>
                );
              }
              return;
            }

            return (
              <SelectOption key={i} selected={selected} onClick={onSelectOption}>
                {option.label}
              </SelectOption>
            );
          })}
        </SelectOptionsContainer>
      </SelectContainer>
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </SelectWrapper>
  );
};

export default Select;
