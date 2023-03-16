import Icon, { Props as IconProps } from '../Icon';
import ToolTip from '../Tooltip';
import {
  Input,
  InputContainer,
  InputWrapper,
  Label,
  ToolTipButton,
  ToolTipWrapper,
} from './index.style';

export interface Props {
  leftIcon: IconProps;
  rightIcon: IconProps;
  label?: { text: string; tooltip?: string };
  disabled: boolean;
  readOnly: boolean;
  [x: string]: any;
}

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
    </InputWrapper>
  );
};

export default InputText;
