import { styled } from 'styled-components';
import { Headline2, Headline3, Paragraph1 } from '@/styles/typography';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledSectionName = styled(Headline3)`
  margin-top: 20px;
  color: #e0b276;
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    margin-top: 12px;
  }
`;

const StyledHeadline = styled(Headline2)`
  margin-top: 60px;
  color: ${({ theme }) => theme.color.primary};
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.tablet}) {
    margin-top: 40px;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    margin-top: 24px;
  }
`;

const StyledSubHeadline = styled(Paragraph1)`
  color: #78310c;
  margin-top: 30px;
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    margin-top: 16px;
  }
`;

export { StyledWrapper, StyledSectionName, StyledHeadline, StyledSubHeadline };
