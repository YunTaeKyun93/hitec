import "./globals.css"
import Providers from "./providers"
import Header from "@/layout/header"
export default async function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          {props.children}
        </Providers>
      </body>
    </html>
  )
}
