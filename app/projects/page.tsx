import Link from "next/link"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-sky-400 mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-slate-400 mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-slate-800 px-3 py-1 rounded-full text-sky-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-block mt-4 text-sky-400 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
