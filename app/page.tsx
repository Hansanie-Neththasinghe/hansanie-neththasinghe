// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }






// import Link from "next/link"

// export default function Home() {
//   return (
//     <section className="text-center max-w-3xl mx-auto">
//       <h1 className="text-5xl font-bold text-white mb-4">
//         HANSANIE <span className="text-sky-400">NETHTHASINGHE</span>
//       </h1>

//       <h2 className="text-xl text-slate-400 mb-6">
//         Undergraduate | Software Engineering
//       </h2>

//       <p className="text-slate-300 leading-relaxed mb-8">
//         Passionate final-year Software Engineering undergraduate (graduating March 2026) with hands-on experience in MERN stack development, DevOps, and cloud deployment. Seeking an Associate Software Engineer role to contribute, grow, and build impactful software solutions.
//       </p>

//       <div className="flex justify-center gap-6">
//         <Link
//           href="/projects"
//           className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg"
//         >
//           View Projects
//         </Link>
//         <a
//           href="/resume.pdf"
//           className="border border-sky-500 text-sky-400 px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition"
//         >
//           Download Resume
//         </a>
//       </div>
//     </section>
//   )
// }




import Hero from "@/components/Hero"
import GlassCard from "@/components/GlassCard"
import { projects } from "@/data/projects"
import RevealSection from "@/components/RevealSection"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-24">

      <Hero />

      {/* About */}
      <section>
        <GlassCard>
          <h2 className="text-2xl font-bold text-sky-400 mb-4">
            About Me
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Passionate, final year Software Engineering undergraduate
            (graduating March 2026) with hands-on experience in full-stack
            development and DevOps. Strong leadership and time management
            skills. Committed to continuous learning and building impactful
            software solutions.
          </p>
        </GlassCard>
      </section>

      {/* Experience */}
      <section>
        <GlassCard>
          <h2 className="text-2xl font-bold text-sky-400 mb-4">
            Experience
          </h2>

          <h3 className="text-lg font-semibold">
            Coltex Biz Solutions Pvt. Ltd.
          </h3>
          <p className="text-slate-400">
            Full Stack Developer Intern | July 2024 – June 2025
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2 text-slate-300">
            <li>Built MERN stack systems</li>
            <li>Designed REST APIs and MongoDB schemas</li>
            <li>Developed responsive React UIs</li>
            <li>Worked in Agile teams with GitHub</li>
          </ul>
        </GlassCard>
      </section>

      {/* Education */}
      <section>
        <GlassCard>
          <h2 className="text-2xl font-bold text-sky-400 mb-4">
            Education
          </h2>
          <p>
            BSc (Hons) Information Technology – Software Engineering
          </p>
          <p>Sri Lanka Institute of Information Technology</p>
          <p>GPA: 3.61 | Graduation: March 2026</p>
        </GlassCard>
      </section>

      {/* Achievements */}
      <section>
        <GlassCard>
          <h2 className="text-2xl font-bold text-sky-400 mb-4">
            Achievements
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Dean’s List – 2022 (GPA 3.83)</li>
            <li>Dean’s List – 2023 (GPA 3.82)</li>
            <li>Dean’s List – 2025 (GPA 3.83)</li>
          </ul>
        </GlassCard>
      </section>

      {/* Projects Preview */}
      <section>
        <h2 className="text-2xl font-bold text-sky-400 mb-6">
          Featured Projects
        </h2>

<RevealSection>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 3).map((project) => (
            <GlassCard key={project.slug}>
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-slate-400 mt-2">
                {project.description}
              </p>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-block mt-4 text-sky-400 hover:underline"
              >
                View Details →
              </Link>
            </GlassCard>
          ))}
        </div>
        </RevealSection>
      </section>

      {/* Skills */}
      <section>
        <GlassCard>
          <h2 className="text-2xl font-bold text-sky-400 mb-4">
            Technical Skills
          </h2>

          <p className="text-slate-300">
            MERN Stack, Java, C#, Python, Flutter, Docker,
            AWS (ECS, S3, IAM, VPC), CI/CD, Microservices,
            MVC Architecture, OOP, Postman Testing.
          </p>
        </GlassCard>
      </section>

    </div>
  )
}
