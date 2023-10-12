"use client"
import { useLocale } from "@/lib/client/useLocale"
import useMobileCheck from "@/lib/client/useMobile"
import { useScroll } from "@/lib/client/useScroll"
import { usePathname } from "next/navigation"
import {
  StyledHeader,
  StyledLogoAndNavWrapper,
  StyledNav,
  StyledNavItem,
} from "./styles"
import Logo from "@/components/logo"
import useNavlist from "@/lib/server/useNavlist"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import PcSubMenu from "./pc-sub-menu"
import NavItem from "@/types/nav"
export default function Header() {
  const isMobile = useMobileCheck()
  const { y } = useScroll()
  const [lang, setLang] = useState("")
  const [isActive, setIsActive] = useState(false)
  const pathName = usePathname()
  const pattern = /\/(kr|en)\//

  const { text } = useLocale(lang)
  const navList = useNavlist(text)
  const getLangformPathName = () => {
    const match = pathName.match(pattern)
    if (match) {
      const matchedText = match[1]
      setLang(matchedText)
    }
  }
  const [productNav, setProductNav] = useState<NavItem[]>([])

  const language = lang === "ko" ? "KR" : "EN"
  const languageTab = ["KR", "EN"]
  const isMainPage: boolean = useMemo(() => {
    const removedLocalPathName = pathName.replace("/kr", "")
    return removedLocalPathName === "/"
  }, [pathName])

  const isMainPageTop = (isMainPage: boolean, y: number) => {
    return isMainPage && y < 1200
  }
  const productNavMenu = "/product"
  const getProductNav = (navList: NavItem[]) => {
    const filteredNav = navList.filter((item) => item.href === productNavMenu)
    return filteredNav
  }

  const filteredProductNav = getProductNav(navList)
  console.log(filteredProductNav)
  useEffect(() => {
    getLangformPathName()
    getProductNav(navList)
  }, [])

  return (
    <StyledHeader $mainTop={isMainPageTop(isMainPage, y)}>
      <div>
        <StyledLogoAndNavWrapper>
          <Logo
            size={isMobile ? "large" : "small"}
            theme={isMainPage && y < 1200 ? "White" : "Black"}
          />
          <StyledNav>
            <ul>
              {navList?.map((item: any) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <StyledNavItem
                      $color={isMainPage && y < 1200 ? "White" : "Black"}
                    >
                      {item.name}
                    </StyledNavItem>
                  </Link>
                  <PcSubMenu
                    navSubList={item.children}
                    productSubList={filteredProductNav}
                  />
                </li>
              ))}
            </ul>
          </StyledNav>
        </StyledLogoAndNavWrapper>
      </div>
    </StyledHeader>
  )
}
