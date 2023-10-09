"use client"
import GlobalStyles from "@/styles/GlobalStyles"
import "./globals.css"
import Providers from "./providers"
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  )
}
