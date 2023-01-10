import styled from 'styled-components';

export interface IProps {
  styleType: 'primary' | 'secondary';
}

export const StyledButton = styled.button<IProps>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background: #8667ec;
  border-radius: 4px;
  transition: 600ms;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  user-select: none;
  box-sizing: border-box;

  color: ${(props) => props.theme.buttons[props.styleType].color};
  background: ${(props) => props.theme.buttons[props.styleType].background};
  border: ${(props) =>
    `${props.theme.buttons[props.styleType].borderSize} ${
      props.theme.buttons[props.styleType].border
    }`};
  padding: ${(props) => props.theme.buttons[props.styleType].padding};
  height: ${(props) => props.theme.buttons[props.styleType].height};
  width: ${(props) => props.theme.buttons[props.styleType].width};

  &:hover {
    color: ${(props) => props.theme.buttons[props.styleType].hoverColor};
    background: ${(props) => props.theme.buttons[props.styleType].hoverBackground};
    border: ${(props) =>
      `${props.theme.buttons[props.styleType].borderSize} ${
        props.theme.buttons[props.styleType].hoverBorder
      }`};
  }
  &:focus {
    outline: none;
    color: ${(props) => props.theme.buttons[props.styleType].focusColor};
    background: ${(props) => props.theme.buttons[props.styleType].focusBackground};
    border: ${(props) =>
      `${props.theme.buttons[props.styleType].borderSize} ${
        props.theme.buttons[props.styleType].focusBorder
      }`};
  }

  &:disabled {
    pointer-events: none;
  }
`;

StyledButton.defaultProps = { styleType: 'primary' };
