import ModalLayout from '@/modals/layout';
import { StyledWrapper, StyledHandels, StyledOk, StyledCancel } from './style';

interface ConfirmModalProps {
  isOpen: boolean;
  okText?: string;
  cancelText?: string;
  onOk: () => void;
  onCancel: () => void;
  children: React.ReactNode;
  dark?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  children,
  isOpen,
  dark = true,
  okText = '확인',
  cancelText = '취소',
  onOk,
  onCancel,
}) => {
  if (!isOpen) {
    return <div />;
  }

  return (
    <ModalLayout onBackdrop={onCancel} onCancel={onCancel}>
      <StyledWrapper>{children}</StyledWrapper>
      <StyledHandels>
        <StyledOk onClick={onOk} dark={dark ? 1 : 0}>
          {okText}
        </StyledOk>
        <StyledCancel onClick={onCancel} dark={dark ? 1 : 0}>
          {cancelText}
        </StyledCancel>
      </StyledHandels>
    </ModalLayout>
  );
};

export type { ConfirmModalProps };
export default ConfirmModal;
