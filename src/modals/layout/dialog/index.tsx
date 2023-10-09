import ModalLayout from '@/modals/layout';
import { FormEvent } from 'react';
import { StyledWrapper, StyledOk } from './style';

interface DialogModalProps {
  isOpen?: boolean;
  isForm?: boolean;
  buttonText?: string;
  onOk: () => void;
  onCancel: () => void;
  children: React.ReactNode;
  disabledButton?: boolean;
}

const DialogModal: React.FC<DialogModalProps> = ({
  children,
  isOpen,
  isForm = true,
  buttonText = '확인',
  onOk,
  onCancel,
  disabledButton,
}) => {
  if (!isOpen) {
    return <div />;
  }

  return (
    <ModalLayout onBackdrop={onCancel} onCancel={onCancel}>
      <StyledWrapper>
        {isForm ? (
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              onOk();
            }}
          >
            {children}
            <StyledOk type="submit" disabled={disabledButton}>
              {buttonText}
            </StyledOk>
          </form>
        ) : (
          <>
            {children}
            <StyledOk type="button" onClick={onOk} disabled={disabledButton}>
              {buttonText}
            </StyledOk>
          </>
        )}
      </StyledWrapper>
    </ModalLayout>
  );
};

export type { DialogModalProps };
export default DialogModal;
