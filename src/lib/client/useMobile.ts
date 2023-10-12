"use client"
import { useEffect, useState } from "react"
import { useIsClient } from "../registry"
let innerWidth: number
const useMobileCheck = () => {
  const isClient = useIsClient()

  if (isClient) {
    innerWidth = window.innerWidth
  }
  const [width, setWidth] = useState(innerWidth)
  // console.log({ innerWidth })
  function handleWindowSizeChange() {
    setWidth(innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])
  return width < 769
}

export default useMobileCheck
