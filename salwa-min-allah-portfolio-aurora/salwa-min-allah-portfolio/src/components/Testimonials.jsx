export default function Testimonials({ d }) {
  if (!d.testimonials?.length) return null
  return (
    <section className="sec" data-s="testimonials">
      <div className="w">
        <h2 data-rv>Kind words</h2>
        <div className="tq">
          {d.testimonials.map((x, i) => (
            <figure key={i} className="qc" data-rv>
              <blockquote>“{x.q}”</blockquote>
              <figcaption><b>{x.n}</b><span>{x.r}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
