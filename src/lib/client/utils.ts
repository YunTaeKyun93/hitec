import { StaticImageData } from "next/image"
export const cls = (...classnames: string[]) => {
  return classnames.join(" ")
}
export const imgFilter = (
  locale: string | undefined,
  koImg: StaticImageData,
  enImg: StaticImageData
) => {
  if (locale === "ko") {
    return koImg
  }
  if (locale === "en") {
    return enImg
  }

  return koImg
}
export const clsFilter = (
  locale: string | undefined,
  ko: string,
  en: string
) => {
  if (locale === "ko") {
    return ko
  }
  if (locale === "en") {
    return en
  }

  return ko
}
