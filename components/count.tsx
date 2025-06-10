// components/HTMLContent.tsx
"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function HTMLContent() {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, 8, { duration: 5 }) // Animate to 4 in 3s
    return () => controls.stop()
  }, [])

  return (
    <motion.pre style={text}>
      {rounded}
    </motion.pre>
  )
}

const text = {
  fontSize: 32,
  color: "#ec4899", // Tailwind pink-500
  fontWeight: "bold",
}
