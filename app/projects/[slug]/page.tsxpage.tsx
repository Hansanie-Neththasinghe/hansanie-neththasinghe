import { projects } from "@/data/projects"
import { notFound } from "next/navigation"

export default function ProjectDetails({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-sky-400 mb-4">
        {project.title}
      </h1>

      <p className="mb-6 text-slate-300">{project.description}</p>

      <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>

      <ul className="list-disc ml-6 space-y-1">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
