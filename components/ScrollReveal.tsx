"use client"
import { useEffect, useRef, ReactNode, CSSProperties } from "react"

interface Props {
  children: ReactNode
  className?: string
  /** Pass "left" or "right" for slide-in direction, default fades up */
  direction?: "left" | "right" | "scale"
  /** Delay in milliseconds before the animation starts */
  delay?: number
  threshold?: number
  style?: CSSProperties
}

export default function ScrollReveal({
  children,
  className = "",
  direction,
  delay = 0,
  threshold = 0.10,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

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

  const animClass =
    direction === "left"  ? "reveal-left"  :
    direction === "right" ? "reveal-right" :
    direction === "scale" ? "reveal-scale" :
    "reveal"

  const inlineStyle: CSSProperties = {
    ...style,
    transitionDelay: delay > 0 ? `${delay}ms` : undefined,
  }

  return (
    <div
      ref={ref}
      className={[animClass, className].filter(Boolean).join(" ")}
      style={inlineStyle}
    >
      {children}
    </div>
  )
}