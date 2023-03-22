import Icon, { Props as IconProps } from '../Icon';
import ToolTip from '../Tooltip';
import { InputContainer, InputWrapper, Label, Input } from './index.style';
import { ToolTipButton, ToolTipWrapper } from '../LabelTooltip';
import { InputErrorMessage } from '../InputErrorMessage';

export interface InputProps {
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  label?: { text: string; tooltip?: string };
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  [x: string]: any;
}

const InputText = ({
  rightIcon,
  leftIcon,
  label,
  disabled = false,
  readOnly = false,
  error = 'Campo obrigatório',
  ...rest
}: InputProps) => {
  return (
    <InputWrapper>
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
      <InputContainer disabled={disabled} readOnly={readOnly}>
        {leftIcon && <Icon {...leftIcon} />}
        <Input disabled={disabled} readOnly={readOnly} {...rest} />
        {rightIcon && <Icon {...rightIcon} />}
      </InputContainer>
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </InputWrapper>
  );
};

export default InputText;
