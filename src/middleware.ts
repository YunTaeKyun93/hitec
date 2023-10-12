type Lang = "en" | "kr"

const getLocale: (url: string) => Lang | undefined = (url) => {
  if (url.includes("/en")) {
    return "en"
  }

  if (url.includes("/kr")) {
    return "kr"
  }
}

import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const currentLang = getLocale(request.url)
  const { origin, pathname } = request.nextUrl
  console.log(request.url)
  if (currentLang != null) {
    return NextResponse.next()
  }

  if (currentLang === "en") {
    return NextResponse.redirect(new URL(`en${pathname}`, origin))
  }
  return NextResponse.redirect(new URL(`kr${pathname}`, origin))
}

// /((?!api|_next/static|_next/image|favicon.ico).*)만 넣으면 되는것을 JS상으로 확인했으나, 실제 적용할때 "/" 를 넣어주지 않으면 메인페이지에서 미들웨어가 리턴하지 않음으로 인해 아래와 같이 배열형태로 작성됨
export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
