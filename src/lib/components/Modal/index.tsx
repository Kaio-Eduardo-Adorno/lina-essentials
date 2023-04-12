import { ReactNode, useRef } from 'react';
import CheckOutsideRefClick from '../../utils/check-outside-ref-click';
import Icon from '../Icon';
import {
  ModalContainer,
  ModalHeader,
  ModalHeaderTitle,
  ModalHeaderX,
  ModalWidthProps,
  ModalWrapper,
} from './index.style';

export interface ModalProps {
  open: boolean;
  title: string | ReactNode;
  onClose: () => void | boolean;
  width?: string | number | ModalWidthProps;
  children: ReactNode;
  closeOnOutsideClick?: boolean;
}

const Modal = ({
  children,
  title,
  open = true,
  onClose = () => false,
  closeOnOutsideClick = true,
}: ModalProps) => {
  const modalRef = useRef(null);

  if (closeOnOutsideClick) CheckOutsideRefClick(modalRef, onClose, open);

  return (
    <ModalWrapper open={open}>
      <ModalContainer ref={modalRef}>
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
