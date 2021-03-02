import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Modal: React.FC = ({ children }) => {
  return createPortal(<div>{children}</div>, modalRoot);
};

export default Modal;
