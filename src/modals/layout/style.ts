import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 20;
`;

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModalContentsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 6px;
  width: calc(100% - 40px);
  min-width: 300px;
  max-width: 480px;
`;

const StyledModalContents = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 32px 40px;
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    padding: 24px;
  }
`;

const StyledCloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    display: none;
  }
`;

export { StyledWrapper, StyledBackdrop, StyledModalContentsWrapper, StyledModalContents, StyledCloseIcon };
