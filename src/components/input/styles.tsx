import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: calc(100% - 20px);
    transform: translate(-100%, -50%);
    color: ${({ theme }) => theme.color.g400};
    cursor: pointer;
  }
`;

interface StyledInputProps {
  warned?: number;
}

const StyledInput = styled.input<StyledInputProps>`
  height: 56px;
  box-sizing: border-box;
  padding: 20px 56px 20px 16px;
  width: 100%;
  border: 1px solid ${({ theme, warned }) => (warned ? theme.color.error : theme.color.g400)};
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  outline: none;
  color: ${({ theme }) => theme.color.g800};
  transition: all 0.25s ease;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.g400};
  }

  &:focus {
    border: 1px solid ${({ theme, warned }) => (warned ? theme.color.error : theme.color.primary)};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.g200};
    border: 1px solid ${({ theme }) => theme.color.g400};
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    height: 40px;
    padding: 10px 40px 10px 12px;
    font-size: 14px;
    line-height: 20px;

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export { StyledInput, StyledWrapper };
