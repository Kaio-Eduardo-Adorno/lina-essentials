import { defaultTheme } from '../../themes';
import styled from '../../utils/wrapper-styled-components';

export const Label = styled('label')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
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

export const TextAreaWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
`;
TextAreaWrapper.defaultProps = { theme: defaultTheme };

interface TextAreaContainerProps {
  disabled: boolean;
  readOnly: boolean;
}

export const TextArea = styled('textarea')<TextAreaContainerProps>`
  display: flex;
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  outline: none;
  border: none;
  height: 84px;
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
  font-size: ${(props) => props.theme.fontSizes.default};
  color: ${(props) => props.theme.colors.darkGray};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;
TextArea.defaultProps = { theme: defaultTheme };
