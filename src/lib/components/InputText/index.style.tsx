import { defaultTheme } from '../../themes';
import styled from '../../utils/wrapper-styled-components';

export const Label = styled('label')`
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.darkGray};
`;
Label.defaultProps = { theme: defaultTheme };

export const Input = styled('input')`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.default};
  color: ${(props) => props.theme.colors.darkGray};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;
Input.defaultProps = { theme: defaultTheme };

export const InputWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
InputWrapper.defaultProps = { theme: defaultTheme };

export interface InputContainerProps {
  disabled: boolean;
  readOnly: boolean;
}

export const InputContainer = styled('label')<InputContainerProps>`
  display: flex;
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  cursor: ${(props) => {
    if (props.disabled) return 'default';
    if (props.readOnly) return 'text';
    return 'text';
  }};
  padding: 8px 10px;
  gap: 4px;
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.primary};
  &:focus-within {
    box-shadow: 0px 0px 2px ${(props) => props.theme.colors.secondary};
  }
  path {
    color: ${(props) => props.theme.colors.primary};
  }
`;
InputContainer.defaultProps = { theme: defaultTheme };

export const ToolTipWrapper = styled('div')`
  position: relative;
`;

export const ToolTipButton = styled('div')`
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 8px;
  line-height: normal;
  cursor: pointer;
`;
ToolTipButton.defaultProps = { theme: defaultTheme };
