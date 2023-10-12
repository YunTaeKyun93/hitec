"use client"
import Link from "next/link"
import { StyledLogoWrapper, StyledLogo } from "./style"
import LOGO_SIZE from "./size"

import Image from "next/image"
interface Props {
  size?: "large" | "medium" | "small" | "mobile"
  theme?: "Black" | "White"
}

const Logo: React.FC<Props> = ({ size = "medium", theme = "Black" }) => {
  return (
    <StyledLogoWrapper size={size}>
      <Link href="/">
        <StyledLogo>
          <Image
            src={`/assets/images/main/logo${theme}.png`}
            width={LOGO_SIZE[size].width}
            height={LOGO_SIZE[size].height}
            alt={`Logo${theme}`}
          />
        </StyledLogo>
      </Link>
    </StyledLogoWrapper>
  )
}

export default Logo
