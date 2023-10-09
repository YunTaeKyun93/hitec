import { Paragraph3 } from '@/styles/typography';
import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  margin-bottom: 40px;
  text-align: center;
  max-width: 385px;
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    margin-bottom: 20px;
  }
`;

const StyledSubTitle = styled(Paragraph3)`
  margin-top: 4px;
  color: #424242;
  word-break: keep-all;
`;

export { StyledWrapper, StyledSubTitle };
