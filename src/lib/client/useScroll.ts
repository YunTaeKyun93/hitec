"use client"
import { useEffect, useState } from "react"
export const useScroll = () => {
  const [scroll, setScroll] = useState<{ y: number }>({
    y: 0,
  })

  const onScroll = () => {
    if (window?.scrollY == null) {
      return
    }

    setScroll({
      y: window.scrollY,
    })
  }

  useEffect(() => {
    if (window != null) {
      setScroll({ y: window.scrollY })
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })

  if (scroll.y == null) {
    return { y: 0 }
  }

  return scroll
}
