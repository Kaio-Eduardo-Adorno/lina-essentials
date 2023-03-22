import { ReactNode } from 'react';
import Icon from '../Icon';
import {
  ModalContainer,
  ModalHeader,
  ModalHeaderTitle,
  ModalHeaderX,
  ModalWrapper,
} from './index.style';

export interface ModalProps {
  open: boolean;
  title: string | ReactNode;
  onClose: () => void | boolean;
  width: string | number;
  children: ReactNode;
}

const Modal = ({ children, title, width, open = true, onClose = () => false }: ModalProps) => {
  return (
    <ModalWrapper open={open}>
      <ModalContainer width={width}>
        <ModalHeader>
          <ModalHeaderTitle>{title}</ModalHeaderTitle>
          <ModalHeaderX
            onClick={() => {
              onClose();
            }}
          >
            <Icon icon='x' size={22} />
          </ModalHeaderX>
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
