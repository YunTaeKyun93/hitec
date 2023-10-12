import styled from "styled-components"

interface StyledLogoWrapperProps {
  size: "large" | "medium" | "small" | "mobile"
}

const StyledLogoWrapper = styled.div<StyledLogoWrapperProps>`
  display: inline-flex;

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.tablet}) {
    img {
      width: 100px;
      height: 20px;
    }
  }
`

const StyledLogo = styled.div`
  display: block;
`

export { StyledLogoWrapper, StyledLogo }
