import { Button2 } from '@/styles/typography';
import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    height: 100%;
  }
`;

const StyledOk = styled(Button2)`
  padding: 14px 42px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.primary};
  transition: all 0.25s ease;
  white-space: nowrap;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    padding: 10px 38px;
  }
`;

export { StyledWrapper, StyledOk };
