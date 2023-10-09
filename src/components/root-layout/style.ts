import { styled } from 'styled-components';

const StyledMain = styled.main`
  min-height: calc(100vh - 80px - 308px);
  margin-top: 80px;
  background-color: ${({ theme }) => theme.color.white};
  @media screen and (max-width: 1420px) {
    min-height: calc(100vh - 80px - 263px);
  }
  @media screen and (max-width: 768px) {
    margin-top: 60px;
    min-height: calc(100vh - 60px - 223px);
  }
`;

export { StyledMain };
