import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPagination = styled.ul`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.typography.family.pretendard};
  gap: 8px;
`;

interface StyledPaginationItemProps {
  active?: number;
}
const StyledPaginationItem = styled.li<StyledPaginationItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  min-width: 32px;
  height: 32px;
  /* background: #ffffff; */
  border: 1px solid #eeeeee;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* color: #bdbdbd; */
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.tablet}) {
    padding: 4px 8px;
    min-width: 32px;
    height: 32px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
    &:first-of-type,
    &:last-of-type {
      padding: 0;
    }
  }
  ${({ active, theme }) =>
    active
      ? `
        background-color: ${theme.color.primary};
        border-color: ${theme.color.primary};
        color: ${theme.color.white};
  `
      : `
      background: ${theme.color.white};
      color: #bdbdbd;
      `}
`;

export { StyledWrapper, StyledPagination, StyledPaginationItem };
