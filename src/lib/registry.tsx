"use client"

import React, { createContext, useState, useEffect, useContext } from "react"
import { useServerInsertedHTML } from "next/navigation"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import GlobalStyles from "@/styles/GlobalStyles"

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== "undefined") return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyles />
      {children}
    </StyleSheetManager>
  )
}
const IsClientCtx = createContext(false)

export function IsClientCtxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])
  return (
    <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
  )
}
export function useIsClient() {
  return useContext(IsClientCtx)
}
