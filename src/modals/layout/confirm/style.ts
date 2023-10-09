import { Button2 } from '@/styles/typography';
import { styled } from 'styled-components';

interface StyledConfirmModalProps {
  dark?: number;
}

const StyledWrapper = styled.div``;

const StyledHandels = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    gap: 12px;
  }
`;

const StyledButton = styled(Button2)`
  padding: 14px 42px;
  width: 50%;
  border: 1px solid ${({ theme }) => theme.color.primary};
  transition: all 0.25s ease;
  white-space: nowrap;
  border-radius: 4px;
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    width: 50%;
    padding: 10px 38px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const StyledOk = styled(StyledButton)<StyledConfirmModalProps>`
  background-color: ${({ theme, dark }) => (dark ? theme.color.white : theme.color.primary)};
  color: ${({ theme, dark }) => (dark ? theme.color.primary : theme.color.white)};
`;

const StyledCancel = styled(StyledButton)<StyledConfirmModalProps>`
  background-color: ${({ theme, dark }) => (dark ? theme.color.primary : theme.color.white)};
  color: ${({ theme, dark }) => (dark ? theme.color.white : theme.color.primary)};
`;

export { StyledWrapper, StyledHandels, StyledOk, StyledCancel };
