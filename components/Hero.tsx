"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-white"
      >
        HANSANIE{" "}
        <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
          NETHTHASINGHE
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-slate-300 max-w-2xl mx-auto"
      >
        Final Year Software Engineering Undergraduate specializing in MERN,
        DevOps, Cloud Deployment & Scalable Systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex justify-center gap-6"
      >
        <Link
          href="/projects"
          className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition text-white"
        >
          View Projects
        </Link>

        <a
          href="/resume.pdf"
          className="px-6 py-3 rounded-xl border border-sky-400 text-sky-400 hover:bg-sky-500 hover:text-white transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  )
}
