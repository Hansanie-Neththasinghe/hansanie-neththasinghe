export default function Education() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-sky-400">Education</h1>

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h2 className="text-xl font-semibold">
          BSc (Hons) Information Technology
        </h2>
        <p>Sri Lanka Institute of Information Technology</p>
        <p>Specializing in Software Engineering</p>
        <p>Weighted GPA: 3.61</p>
        <p>Expected Graduation: March 2026</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-sky-400">Achievements</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Dean’s List Award – 2022 (GPA 3.83)</li>
          <li>Dean’s List Award – 2023 (GPA 3.82)</li>
          <li>Dean’s List Award – 2025 (GPA 3.83)</li>
        </ul>
      </div>
    </div>
  )
}
