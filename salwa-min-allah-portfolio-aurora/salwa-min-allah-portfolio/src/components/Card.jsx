export default function Card({ p, i }) {
  const link = p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {}
  return (
    <a className="pc" data-rv style={{ '--i': i }} {...link}>
      {p.img ? <img className="pi" src={p.img} alt={p.t} loading="lazy" /> : <div className="th" />}
      <small>{p.g}</small>
      <h3>{p.t}</h3>
      <p>{p.d}</p>
    </a>
  )
}
