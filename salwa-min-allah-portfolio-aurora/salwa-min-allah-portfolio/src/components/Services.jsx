export default function Services({ d }) {
  if (!d.services?.length) return null
  return (
    <section className="sec" data-s="services">
      <div className="w">
        <h2 data-rv>What I do</h2>
        <div className="sv">
          {d.services.map((s, i) => (
            <div key={i} className="svc" data-rv><h3>{s.t}</h3><p>{s.d}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
