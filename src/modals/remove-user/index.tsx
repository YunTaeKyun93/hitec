import { Paragraph1Bold } from '@/styles/typography';
import ConfirmModal, { ConfirmModalProps } from '../layout/confirm';
import { StyledWrapper, StyledSubTitle } from './style';

const RemoveUserModal: React.FC<Omit<ConfirmModalProps, 'children'>> = ({ ...props }) => {
  return (
    <ConfirmModal {...props} okText="탈퇴" cancelText="닫기">
      <StyledWrapper>
        <Paragraph1Bold>회원탈퇴</Paragraph1Bold>
        <StyledSubTitle>
          회원을 탈퇴하시겠습니까? <br /> 탈퇴 후 모든 데이터가 삭제되며 복구가 불가능합니다.
        </StyledSubTitle>
      </StyledWrapper>
    </ConfirmModal>
  );
};

export default RemoveUserModal;
