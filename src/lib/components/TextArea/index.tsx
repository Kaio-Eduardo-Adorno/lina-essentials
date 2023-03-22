import ToolTip from '../Tooltip';
import { Label, TextArea, TextAreaWrapper } from './index.style';
import { ToolTipButton, ToolTipWrapper } from '../LabelTooltip';
import { InputErrorMessage } from '../InputErrorMessage';

export interface TextAreaProps {
  label?: { text: string; tooltip?: string };
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  [x: string]: any;
}

const TextAreaInput = ({
  label,
  error,
  disabled = false,
  readOnly = false,
  ...rest
}: TextAreaProps) => {
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
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </TextAreaWrapper>
  );
};

export default TextAreaInput;
