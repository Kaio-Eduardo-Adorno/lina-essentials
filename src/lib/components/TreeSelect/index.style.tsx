import { defaultTheme } from '../../themes';
import styled from '../../utils/wrapper-styled-components';

export interface Props {
  open?: boolean;
}

export const TreeSelectWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 100%;
`;
TreeSelectWrapper.defaultProps = { theme: defaultTheme };

interface TreeSelectInputContainerProps {
  disabled: boolean;
  readOnly: boolean;
}
export const TreeSelectInputContainer = styled('div')<TreeSelectInputContainerProps>`
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
TreeSelectInputContainer.defaultProps = { theme: defaultTheme };

export const TreeSelectOptionsContainer = styled('div')<Props>`
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
  max-height: 214px;
  overflow-y: auto;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: inset 0 0 2px ${(props) => `${props.theme.colors.darkGray}40`};
    :hover {
      background: ${(props) => props.theme.colors.secondary};
    }
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
TreeSelectOptionsContainer.defaultProps = { theme: defaultTheme };

export const TreeSelectContainer = styled('div')`
  position: relative;
  min-height: 38px;
`;
TreeSelectContainer.defaultProps = { theme: defaultTheme };

export interface TreeSelectOptionProps {
  selected?: boolean;
  notSelectable?: boolean;
}

export const TreeSelectOption = styled('div')<TreeSelectOptionProps>`
  cursor: ${(props) => (props.notSelectable ? 'default' : 'pointer')};
  display: flex;
  gap: 10px;
  justify-content: left;
  align-items: center;
  padding: 8px 14px;
  color: ${(props) => props.theme.colors.darkGray};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.quaternary : props.theme.colors.white};
  svg {
    fill: ${(props) => props.theme.colors.primary};
  }
  &:first-child {
    border-radius: 4px 4px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 4px 4px;
  }
  &:hover {
    svg {
      fill: ${(props) =>
        props.notSelectable ? props.theme.colors.primary : props.theme.colors.white};
    }
    color: ${(props) =>
      props.notSelectable ? props.theme.colors.darkGray : props.theme.colors.white};
    background-color: ${(props) =>
      props.notSelectable ? props.theme.colors.white : props.theme.colors.secondary};
  }
`;
TreeSelectOption.defaultProps = { theme: defaultTheme };

interface ITreeSelectOptionChevron {
  open: boolean;
}

export const TreeSelectOptionChevron = styled('button')<ITreeSelectOptionChevron>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 18px;
  height: 18px;
  border: 1px solid transparent;
  background: transparent;
  transition: all 400ms;
  border-radius: 6px;

  svg {
    transform: ${(props) => (props.open ? 'rotate(0.5turn)' : '')};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.white};
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;
TreeSelectOptionChevron.defaultProps = { theme: defaultTheme };

export const ChildrensContainer = styled('div')`
  cursor: pointer;
  padding: 0px 0px 0px 12px;
`;
ChildrensContainer.defaultProps = { theme: defaultTheme };

export interface TreeSelectInputProps {
  search?: boolean;
}

export const TreeSelectInput = styled('input')<TreeSelectInputProps>`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.default};
  color: ${(props) => props.theme.colors.darkGray};
  pointer-events: ${(props) => (props.search ? 'all' : 'none')};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;
TreeSelectInput.defaultProps = { theme: defaultTheme };

export const TreeSelectInputValue = styled('input')`
  display: none;
`;
