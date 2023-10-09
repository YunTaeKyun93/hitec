import styled from 'styled-components';

const StyledTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    gap: 8px;
  }
`;

const StyledInputAndHelperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: calc(100% - 12px);
    transform: translate(-100%, -50%);
    color: ${({ theme }) => theme.color.g400};
    cursor: pointer;
  }
`;

const StyledHelperText = styled.span`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.g800};
`;

export { StyledTextFieldWrapper, StyledInputAndHelperText, StyledHelperText, StyledInputWrapper };
