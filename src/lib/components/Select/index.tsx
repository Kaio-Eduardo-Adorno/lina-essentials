import { useState } from 'react';
import styled from '../../utils/wrapper-styled-components';
import Icon from '../Icon';

export interface Props {
  open?: boolean;
}

const Label = styled('label')`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  color: #666666;
`;
const Input = styled('input')`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  pointer-events: none;
  ::placeholder {
    color: #9b9b9b;
  }
`;

const SelectWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
`;

const InputContainer = styled('div')`
  display: flex;
  background: #fdfdfd;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 10px;
  gap: 4px;
  box-shadow: 0px 0px 2px rgba(134, 103, 236, 0.8);
  &:focus-within {
    box-shadow: 0px 0px 2px rgba(0, 103, 236, 0.8);
  }
`;
const OptionsContainer = styled('div')<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 42px;
  background: #fdfdfd;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  opacity: ${(props) => (props.open ? '1' : '0')};
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};

  transition: opacity linear 0.25s;
`;
const SelectContainer = styled('div')`
  position: relative;
`;
const Option = styled('div')`
  cursor: pointer;
  padding: 8px 14px;
  &:first-child {
    border-radius: 4px 4px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 4px 4px;
  }
  &:hover {
    background-color: aliceblue;
  }
`;

const Select = ({
  options = [
    { label: 'Teste', value: '2a' },
    { label: 'Teste2', value: '2a' },
  ],
}: {
  options: { label: string; value: any }[];
}) => {
  const [open, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<{ label: string; value: any }>({
    label: 'Selecione',
    value: 'a',
  });

  return (
    <SelectWrapper>
      <Label>Label</Label>
      <SelectContainer>
        <InputContainer onClick={() => setOpen(!open)}>
          <Input placeholder='Selecione' value={currentOption.label || undefined} />
          <Icon icon='chevron_down' size={22} fill='#8667EC' />
        </InputContainer>
        <OptionsContainer open={open}>
          <Option
            onClick={() => {
              setCurrentOption({ label: 'Selecione', value: null });
              setOpen(false);
            }}
          >
            Selecione
          </Option>
          {options.map((option, i) => (
            <Option
              key={i}
              onClick={() => {
                setCurrentOption(option);
                setOpen(false);
              }}
            >
              {option.label}
            </Option>
          ))}
        </OptionsContainer>
      </SelectContainer>
    </SelectWrapper>
  );
};

export default Select;
