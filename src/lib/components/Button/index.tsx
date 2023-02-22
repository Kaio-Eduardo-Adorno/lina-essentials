import styled from '../../utils/wrapper-styled-components';
import { defaultTheme } from '../../themes';

type styleTypes = keyof typeof defaultTheme.buttons;

export interface IProps {
  styleType: styleTypes;
}

const StyledButton = styled('button')<IProps>`
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

  color: ${(props) =>
    props?.theme?.buttons?.[props.styleType]?.color || defaultTheme.buttons.primary.color};
  background: ${(props) =>
    props?.theme?.buttons?.[props.styleType]?.background ||
    defaultTheme.buttons.primary.background};
  border: ${(props) =>
    `${
      props?.theme?.buttons?.[props.styleType]?.borderSize ||
      defaultTheme.buttons.primary.borderSize
    } ${props?.theme?.buttons?.[props.styleType]?.border || defaultTheme.buttons.primary.border}`};
  padding: ${(props) =>
    props?.theme?.buttons?.[props.styleType]?.padding || defaultTheme.buttons.primary.padding};
  height: ${(props) =>
    props?.theme?.buttons?.[props.styleType]?.height || defaultTheme.buttons.primary.height};
  width: ${(props) =>
    props?.theme?.buttons?.[props.styleType]?.width || defaultTheme.buttons.primary.width};

  &:hover {
    color: ${(props) =>
      props?.theme?.buttons?.[props.styleType]?.hoverColor ||
      defaultTheme.buttons.primary.hoverColor};
    background: ${(props) =>
      props?.theme?.buttons?.[props.styleType]?.hoverBackground ||
      defaultTheme.buttons.primary.hoverBackground};
    border: ${(props) =>
      `${
        props?.theme?.buttons?.[props.styleType]?.borderSize ||
        defaultTheme.buttons.primary.borderSize
      } ${
        props?.theme?.buttons?.[props.styleType]?.hoverBorder ||
        defaultTheme.buttons.primary.hoverBorder
      }`};
  }
  &:focus {
    outline: none;
    color: ${(props) =>
      props?.theme?.buttons?.[props.styleType]?.focusColor ||
      defaultTheme.buttons.primary.focusColor};
    background: ${(props) =>
      props?.theme?.buttons?.[props.styleType]?.focusBackground ||
      defaultTheme.buttons.primary.focusBackground};
    border: ${(props) =>
      `${
        props?.theme?.buttons?.[props.styleType]?.borderSize ||
        defaultTheme.buttons.primary.borderSize
      } ${
        props?.theme?.buttons?.[props.styleType]?.focusBorder ||
        defaultTheme.buttons.primary.focusBorder
      }`};
  }

  &:disabled {
    pointer-events: none;
  }
`;

StyledButton.defaultProps = { styleType: 'primary', theme: defaultTheme };

export default StyledButton;
