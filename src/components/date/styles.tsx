import styled from 'styled-components';
import { InputProps } from '../input';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    top: 50%;
    left: calc(100% - 20px);
    transform: translate(-100%, -50%);
    color: ${({ theme }) => theme.color.g400};
    cursor: pointer;
  }
`;

const StyledInput = styled.input<Pick<InputProps, 'warned'>>`
  position: relative;
  height: 56px;
  box-sizing: border-box;
  padding: 16px 20px;
  width: 100%;
  border: 1px solid ${({ theme, warned }) => (warned ? theme.color.error : theme.color.g400)};
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  color: ${({ theme }) => theme.color.g800};
  transition: all 0.25s ease;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.g200};
    border: 1px solid ${({ theme }) => theme.color.g400};
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    height: 40px;
    padding: 10px 12px 10px 12px;
    font-size: 14px;
    line-height: 20px;

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export { StyledInput, StyledWrapper };
