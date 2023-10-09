import { styled } from 'styled-components';

interface StyledLoadingProps {
  height?: string;
}

const StyledWrapper = styled.div<StyledLoadingProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  & > div {
    box-sizing: content-box;
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border-top: 4px solid ${({ theme }) => theme.color.primary};
    border-left: 4px solid ${({ theme }) => theme.color.primary};
    border-bottom: 4px solid ${({ theme }) => theme.color.primary};
    border-right: 4px solid transparent;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export { StyledWrapper };
