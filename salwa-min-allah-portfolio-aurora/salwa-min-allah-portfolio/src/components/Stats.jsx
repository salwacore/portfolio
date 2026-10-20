export default function Stats({ d }) {
  if (!d.stats?.length) return null
  return (
    <section className="stt">
      <div className="w" data-rv>
        {d.stats.map((s, i) => (
          <div key={i}><b>{s.n}</b><span>{s.l}</span></div>
        ))}
      </div>
    </section>
  )
}
