import styled from '../../utils/wrapper-styled-components';
import Icon, { Props as IconProps } from '../Icon';
import ToolTip from '../Tooltip';

export interface Props {
  leftIcon: IconProps;
  rightIcon: IconProps;
  label: { text: string; tooltip: string };
  disabled: boolean;
  readOnly: boolean;
  [x: string]: any;
}

const Label = styled('label')`
  display: flex;
  gap: 8px;
  align-items: center;
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
  ::placeholder {
    color: #9b9b9b;
  }
`;

const InputWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export interface InputContainerProps {
  disabled: boolean;
  readOnly: boolean;
}

const InputContainer = styled('label')<InputContainerProps>`
  display: flex;
  background: #fdfdfd;
  border-radius: 4px;
  cursor: ${(props) => {
    if (props.disabled) return 'default';
    if (props.readOnly) return 'text';
    return 'text';
  }};
  padding: 8px 10px;
  gap: 4px;
  box-shadow: 0px 0px 2px rgba(134, 103, 236, 0.8);
  &:focus-within {
    box-shadow: 0px 0px 2px rgba(0, 103, 236, 0.8);
  }
`;

const ToolTipWrapper = styled('div')`
  position: relative;
`;

const ToolTipButton = styled('div')`
  border-radius: 100%;
  background-color: #666666;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfdfd;
  font-size: 8px;
  line-height: normal;
  cursor: pointer;
`;

const InputText = ({
  rightIcon,
  leftIcon,
  label,
  disabled = false,
  readOnly = false,
  ...rest
}: Props) => {
  return (
    <InputWrapper>
      <Label>
        {label?.text}
        <ToolTipWrapper>
          <ToolTip text='aaaaa'>
            <ToolTipButton>?</ToolTipButton>
          </ToolTip>
        </ToolTipWrapper>
      </Label>
      <InputContainer disabled={disabled} readOnly={readOnly}>
        {leftIcon && <Icon {...leftIcon} />}
        <Input disabled={disabled} readOnly={readOnly} value={1111} {...rest} />
        {rightIcon && <Icon {...rightIcon} />}
      </InputContainer>
    </InputWrapper>
  );
};

export default InputText;
