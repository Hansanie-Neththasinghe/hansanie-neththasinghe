// "use client"
// import { motion } from "framer-motion"

// export default function GlassCard({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode
//   className?: string
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6 ${className}`}
//     >
//       {children}
//     </motion.div>
//   )
// }


"use client"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = ref.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 8
    const rotateY = ((x - centerX) / centerX) * -8

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  function handleMouseLeave() {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0) rotateY(0)"
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`transition-transform duration-200 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  )
}
