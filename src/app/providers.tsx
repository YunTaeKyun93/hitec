"use client"

import { ThemeProvider } from "styled-components"
import { StyledComponentsRegistry, IsClientCtxProvider } from "@/lib/registry"
import theme from "@/styles/theme"
import { useLocale } from "@/lib/client/useLocale"
import { cls, clsFilter } from "@/lib/client/utils"

const Providers = (props: React.PropsWithChildren) => {
  const { locale } = useLocale()
  return (
    <div
      className={cls(
        clsFilter(
          locale,
          "font=[Pretendard Variable]",
          "font=[Pretendard Variable]"
        )
      )}
    >
      <IsClientCtxProvider>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </StyledComponentsRegistry>
      </IsClientCtxProvider>
    </div>
  )
}

export default Providers
