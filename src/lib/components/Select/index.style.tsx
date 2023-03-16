import { defaultTheme } from '../../themes';
import styled from '../../utils/wrapper-styled-components';

export interface Props {
  open?: boolean;
}

export const SelectWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
`;
SelectWrapper.defaultProps = { theme: defaultTheme };

interface SelectInputContainerProps {
  disabled: boolean;
  readOnly: boolean;
}
export const SelectInputContainer = styled('div')<SelectInputContainerProps>`
  display: flex;
  background: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border-radius: 4px;
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
SelectInputContainer.defaultProps = { theme: defaultTheme };

export const SelectOptionsContainer = styled('div')<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 42px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  opacity: ${(props) => (props.open ? '1' : '0')};
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};

  transition: opacity linear 0.25s;
`;
SelectOptionsContainer.defaultProps = { theme: defaultTheme };

export const SelectContainer = styled('div')`
  position: relative;
`;
SelectContainer.defaultProps = { theme: defaultTheme };

export const SelectOption = styled('div')`
  cursor: pointer;
  padding: 8px 14px;
  color: ${(props) => props.theme.colors.darkGray};
  &:first-child {
    border-radius: 4px 4px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 4px 4px;
  }
  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
SelectOption.defaultProps = { theme: defaultTheme };

export const SelectInput = styled('input')`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.default};
  color: ${(props) => props.theme.colors.darkGray};
  pointer-events: none;
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;
SelectInput.defaultProps = { theme: defaultTheme };

export const SelectInputValue = styled('input')`
  display: none;
`;
