import { Button2 } from '@/styles/typography';
import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 32px;
    @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
      margin-bottom: 16px;
      width: 32px;
      height: 32px;
    }
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
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    padding: 10px 38px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export { StyledWrapper, StyledOk };
