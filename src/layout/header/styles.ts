import styled, { css } from "styled-components"

interface NavItemProps {
  onScroll?: number
  $color?: string
  $bg?: string
  mobile?: string
  $mainTop?: boolean
}
const StyledHeader = styled.header<NavItemProps>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease-in-out;
  z-index: 10;
  ${(props) =>
    !props.$mainTop &&
    css`
      background-color: ${({ theme }) => theme.colors.primary.white};
      border-bottom: 1px solid ${({ theme }) => theme.colors.line.grey};
    `}

  & > div {
    max-width: 1620px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 150px;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    height: 62px;

    & > div {
      padding: 0 20px;
    }
  }
`
const StyledLogoAndNavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
const StyledNav = styled.div`
  margin-left: 373px;
  height: 100%;
  ul {
    display: flex;
    align-items: center;
    gap: 79px;
    list-style: none;
    height: 100%;
    li {
      position: relative;
      &:hover {
        & > div {
          max-height: 500px;
        }
      }
    }
  }
  a {
  }
`
const StyledNavItem = styled.div<NavItemProps>`
  height: 100px;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.typography.family.pretendard};
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${(props) => props.$color};
  transition: 0.3s all ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.hitec3};

    & > div {
      max-height: 500px;
    }
  }
`
// PcSubMenu

const StyledPcSubMenuWrapper = styled.div<NavItemProps>`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 250px;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 0px;
  overflow: hidden;
  transition: 0.3s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.white};
    max-height: 400px;
  }

  ul {
    width: 300px;
    background-color: ${({ theme }) => theme.colors.primary.white};
    box-shadow: 0px 3px 4px 3px white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 24px 0;
    color: black;
  }
`
const StyledPcSubMenuItem = styled.div<NavItemProps>`
  &:hover {
    color: ${({ theme }) => theme.colors.primary.hitec3};
  }
`
const StyledPcSubProductMenuItem = styled.div<NavItemProps>`
  ${(props) =>
    !props.$mainTop &&
    css`
      color: ${({ theme }) => theme.colors.primary.black};
    `}
  &:hover {
    color: ${({ theme }) => theme.colors.primary.hitec3};
  }
`
export {
  StyledHeader,
  StyledLogoAndNavWrapper,
  StyledNav,
  StyledNavItem,
  StyledPcSubMenuWrapper,
  StyledPcSubMenuItem,
  StyledPcSubProductMenuItem,
}
