import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.g900};

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const StyledStar = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: 14px;

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export { StyledLabel, StyledStar };
