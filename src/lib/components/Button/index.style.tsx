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
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid transparent;
  color: ${(props) => props.theme.colors.white};
  svg {
    fill: ${(props) => props.theme.colors.white};
  }

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
  &:focus {
    outline: none;
    background: ${(props) => props.theme.colors.quaternary};
    color: ${(props) => props.theme.colors.primary};
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  &:disabled {
    pointer-events: none;
  }
`;

PrimaryStyledButton.defaultProps = { theme: defaultTheme };

export const SecondaryStyledButton = styled(PrimaryStyledButton)`
  background: ${(props) => props.theme.colors.quaternary};
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.primary};
  svg {
    fill: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid transparent;
    color: ${(props) => props.theme.colors.white};
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
  &:focus {
    background: ${(props) => props.theme.colors.tertiary};
    border: 1px solid transparent;
    color: ${(props) => props.theme.colors.primary};
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;
