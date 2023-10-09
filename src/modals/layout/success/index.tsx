import Image from 'next/image';
import ModalLayout from '@/modals/layout';
import { StyledWrapper, StyledOk } from './style';

interface SuccessModalProps {
  isOpen?: boolean;
  buttonText?: string;
  onOk: () => void;
  children: React.ReactNode;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ children, isOpen, buttonText = '확인', onOk }) => {
  if (!isOpen) {
    return <div />;
  }

  return (
    <ModalLayout onCancel={onOk}>
      <StyledWrapper>
        <Image width={48} height={48} src="/icons/success-48.svg" alt="" />
        {children}
        <StyledOk onClick={onOk}>{buttonText}</StyledOk>
      </StyledWrapper>
    </ModalLayout>
  );
};

export type { SuccessModalProps };
export default SuccessModal;
