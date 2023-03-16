import styled from '../../utils/wrapper-styled-components';
import { defaultTheme } from '../../themes';

export const PrimaryStyledButton = styled('button')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  transition: 600ms;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  user-select: none;
  box-sizing: border-box;

  padding: 8px 32px;
  height: 38px;
  width: auto;

  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid transparent;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.secondary};
  }
  &:focus {
    outline: none;
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.quaternary};
  }

  &:disabled {
    pointer-events: none;
  }
`;

PrimaryStyledButton.defaultProps = { theme: defaultTheme };

export const SecondaryStyledButton = styled(PrimaryStyledButton)`
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.quaternary};
  border: 1px solid ${(props) => props.theme.colors.tertiary};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid transparent;
  }
  &:focus {
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tertiary};
    border: 1px solid transparent;
  }
`;
