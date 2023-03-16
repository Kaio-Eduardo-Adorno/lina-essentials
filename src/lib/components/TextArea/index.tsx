import Icon, { Props as IconProps } from '../Icon';
import ToolTip from '../Tooltip';
import { Label, TextArea, TextAreaWrapper } from './index.style';
import { ToolTipButton, ToolTipWrapper } from '../LabelTooltip';

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
    <TextAreaWrapper>
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
      <TextArea disabled={disabled} readOnly={readOnly} {...rest} />
    </TextAreaWrapper>
  );
};

export default InputText;
