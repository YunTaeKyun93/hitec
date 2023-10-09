import styled from 'styled-components';

const StyledSelectWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const StyledSelectArrow = styled.div`
  display: inline-block;
  position: absolute;
  top: calc(50% - 2px);
  right: 26px;
  z-index: 1;
  width: 8px;
  height: 8px;
  background-color: transperants;
  border-left: 2px solid ${({ theme }) => theme.color.g900};
  border-bottom: 2px solid ${({ theme }) => theme.color.g900};
  transform: translateY(-50%) rotate(-45deg);
`;

const StyledSelect = styled.select`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.g400};
  color: ${({ theme }) => theme.color.black};
  border-radius: 4px;
  padding: 16px 52px 16px 20px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.g200};
    border: 1px solid ${({ theme }) => theme.color.g400};
  }

  &:disabled + div {
    border-left: 2px solid ${({ theme }) => theme.color.g400};
    border-bottom: 2px solid ${({ theme }) => theme.color.g400};
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    height: 40px;
    padding: 10px 40px 10px 12px;
    font-size: 14px;
    line-height: 20px;
  }
`;

const StyledOption = styled.option`
  width: 100%;
`;

export { StyledSelectWrapper, StyledSelect, StyledOption, StyledSelectArrow };
