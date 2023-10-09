import ModalLayout from '@/modals/layout';
import { StyledWrapper, StyledOk } from './style';

interface AlertModalProps {
  isOpen?: boolean;
  buttonText?: string;
  onOk: () => void;
  children: React.ReactNode;
}

const AlertModal: React.FC<AlertModalProps> = ({ children, isOpen, buttonText = '확인', onOk }) => {
  if (!isOpen) {
    return <div />;
  }

  return (
    <ModalLayout onCancel={onOk}>
      <StyledWrapper>
        {children}
        <StyledOk onClick={onOk}>{buttonText}</StyledOk>
      </StyledWrapper>
    </ModalLayout>
  );
};

export type { AlertModalProps };
export default AlertModal;
