export default function StatCard({ label, value, change }) {
  return (
    <article className="stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      <p className="stat-change">{change}</p>
    </article>
  )
}
