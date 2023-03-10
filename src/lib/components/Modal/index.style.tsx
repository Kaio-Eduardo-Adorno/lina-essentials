import styled from '../../utils/wrapper-styled-components';
import { defaultTheme } from '../../themes';
export interface Props {
  open?: boolean;
}

export const ModalWrapper = styled('div')<Props>`
  font-size: 14px;
  line-height: 16px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';
  color: #666666;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.open ? '1' : '0')};
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);

  transition: opacity linear 0.25s;
`;

export const ModalContainer = styled('div')<Props>`
  background: #ffffff;
  box-shadow: 0px 10px 15px rgba(51, 51, 51, 0.2);
  border-radius: 16px;
  padding: 20px;
  width: 230px;
`;

export const ModalHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export const ModalHeaderTitle = styled('div')`
  display: flex;
  font-size: 22px;
  line-height: 26px;
  color: #212121;
`;
export const ModalHeaderX = styled('div')`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
ModalHeaderX.defaultProps = { theme: defaultTheme };
