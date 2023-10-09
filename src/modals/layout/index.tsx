import {
  StyledWrapper,
  StyledBackdrop,
  StyledModalContentsWrapper,
  StyledModalContents,
  StyledCloseIcon,
} from './style';
import CancelIcon from '../../../public/icons/cancel-24.svg';

interface Props {
  children: React.ReactNode;
  onBackdrop?: () => void;
  onCancel: () => void;
}

const ModalLayout: React.FC<Props> = ({ children, onBackdrop, onCancel }) => {
  return (
    <StyledWrapper>
      <StyledBackdrop onClick={onBackdrop} />
      <StyledModalContentsWrapper>
        <StyledModalContents>
          {children}
          <StyledCloseIcon onClick={onCancel}>
            <CancelIcon />
          </StyledCloseIcon>
        </StyledModalContents>
      </StyledModalContentsWrapper>
    </StyledWrapper>
  );
};

export default ModalLayout;
