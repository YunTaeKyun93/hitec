"use client"
import React, { useEffect, useState } from "react"
import {
  StyledPcSubMenuWrapper,
  StyledPcSubMenuItem,
  StyledPcSubProductMenuItem,
} from "./styles"
import NavItem from "@/types/nav"
import Link from "next/link"
import { dummyNavList } from "./dummy-menu"

export default function PcSubMenu({
  navSubList,
  productSubList,
}: {
  navSubList: NavItem[]
  productSubList: NavItem
}) {
  const [productNav, setProductNav] = useState<NavItem[]>([])

  useEffect(() => {
    setProductNav(navSubList)
  }, [])

  return (
    <StyledPcSubMenuWrapper>
      <ul>
        {navSubList.map((item) => (
          <li key={item.href}>
            <Link href={item.href} passHref={false}>
              {item.name}
              <StyledPcSubMenuItem>{item.name}</StyledPcSubMenuItem>
            </Link>
          </li>
        ))}
      </ul>
    </StyledPcSubMenuWrapper>
  )
}
