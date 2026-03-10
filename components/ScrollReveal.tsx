"use client"

import { useEffect, useRef, ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale"
  delay?: "d1" | "d2" | "d3" | "d4" | "d5" | "d6"
  direction?: "left" | "right" | "up" | "down"
  threshold?: number
  style?: React.CSSProperties
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "reveal",
  delay,
  threshold = 0.12,
  style,
}: Props) {

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={[animation, delay ?? "", className].join(" ").trim()}
      style={style}
    >
      {children}
    </div>
  )
}