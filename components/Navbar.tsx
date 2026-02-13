"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-sky-400">
          HANSANIE
        </Link>
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-sky-400 transition ${
                pathname === link.path ? "text-sky-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
