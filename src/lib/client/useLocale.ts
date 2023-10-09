import { en } from "@/components/locales/en"
import { kr } from "@/components/locales/kr"
import { useRouter } from "next/router"

export const useLocale = () => {
  const router = useRouter()
  const { locale } = router

  if (locale === "ko") {
    return { locale, text: kr }
  }
  if (locale === "en") {
    return { locale, text: en }
  }
  return { locale, text: kr }
}
