"use client"
import { en } from "@/components/locales/en"
import { kr } from "@/components/locales/kr"
import { useRouter } from "next/navigation"

export const useLocale = (locale: string) => {
  if (locale === "ko") {
    return { text: kr }
  }
  if (locale === "en") {
    return { text: en }
  }
  return { text: kr }
}
