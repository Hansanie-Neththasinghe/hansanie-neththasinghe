"use client"
import { motion } from "framer-motion"

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-3xl top-10 left-10"
      />

      <motion.div
        animate={{ x: [0, -60, 60, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl bottom-10 right-10"
      />
    </div>
  )
}
