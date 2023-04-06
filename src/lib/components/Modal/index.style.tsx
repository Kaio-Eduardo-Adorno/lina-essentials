import styled from '../../utils/wrapper-styled-components';
import { defaultTheme } from '../../themes';
export interface Props {
  open?: boolean;
}

export const ModalWrapper = styled('div')<Props>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';

  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.darkGray};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 30px 0px;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
  opacity: ${(props) => (props.open ? '1' : '0')};
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity linear 0.25s;
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;
ModalWrapper.defaultProps = { theme: defaultTheme };

export interface ModalWidthProps {
  xs: string | number;
  sm: string | number;
  md: string | number;
  lg: string | number;
  xl: string | number;
}
export interface ModalContainerProps {
  width?: string | number | ModalWidthProps;
}

const defineModalWidth = (
  defaultValue: string | number,
  type: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  width?: string | number | ModalWidthProps,
) => {
  if (!width) return defaultValue;
  else if (typeof width === 'string' || typeof width === 'number') return width;
  return width[type];
};

export const ModalContainer = styled('div')<ModalContainerProps>`
  background: #ffffff;
  box-shadow: 0px 10px 15px rgba(51, 51, 51, 0.2);
  border-radius: 16px;
  padding: 20px;
  width: ${(props) => defineModalWidth('60%', 'xl', props.width)};
  @media screen and (max-width: 1200px) {
    width: ${(props) => defineModalWidth('70%', 'lg', props.width)};
  }
  @media screen and (max-width: 992px) {
    width: ${(props) => defineModalWidth('70%', 'md', props.width)};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => defineModalWidth('80%', 'sm', props.width)};
  }
  @media screen and (max-width: 576px) {
    width: ${(props) => defineModalWidth('100%', 'xs', props.width)};
    border-radius: 0;
  }
`;
ModalContainer.defaultProps = { theme: defaultTheme };

export const ModalHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  padding-bottom: 16px;
  margin-bottom: 16px;
`;
ModalHeader.defaultProps = { theme: defaultTheme };

export const ModalHeaderTitle = styled('div')`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.giant};
  color: ${(props) => props.theme.colors.black};
`;
ModalHeaderTitle.defaultProps = { theme: defaultTheme };

export const ModalHeaderX = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.colors.primary};
    &:hover {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;
ModalHeaderX.defaultProps = { theme: defaultTheme };
