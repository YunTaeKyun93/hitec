import styled from 'styled-components';

const StyledSelectFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    gap: 8px;
  }
`;

const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export { StyledSelectFieldWrapper, StyledSelectWrapper };
