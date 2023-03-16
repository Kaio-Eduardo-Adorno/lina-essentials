import { useEffect, useState } from 'react';
import Icon from '../Icon';
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

export interface Props {
  label?: { text: string; tooltip?: string };
  disabled: boolean;
  readOnly: boolean;
  options: { label: string; value: any }[];
  selectedValue: any;
  onChange: (v: any) => void;
  [x: string]: any;
}

const Select = ({
  options = [
    { label: 'ok', value: 'ok' },
    { label: 'teste', value: 'teste' },
  ],
  onChange,
  selectedValue = null,
  label,
  disabled = false,
  readOnly = false,
  ...rest
}: Props) => {
  const [open, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<{ label: string; value: any }>({
    label: 'Selecione',
    value: null,
  });

  useEffect(() => {
    onChange(currentOption.value);
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
            onChange={() => null}
            disabled={disabled}
            readOnly={readOnly}
            value={currentOption.label}
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
              setCurrentOption({ label: 'Selecione', value: null });
              setOpen(false);
            }}
          >
            Selecione
          </SelectOption>
          {options.map((option, i) => (
            <SelectOption
              key={i}
              onClick={() => {
                setCurrentOption(option);
                setOpen(false);
              }}
            >
              {option.label}
            </SelectOption>
          ))}
        </SelectOptionsContainer>
      </SelectContainer>
    </SelectWrapper>
  );
};

export default Select;
