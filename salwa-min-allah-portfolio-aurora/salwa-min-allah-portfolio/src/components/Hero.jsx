import Cta from '../components/Cta.jsx'
import { lead } from '../hooks.js'

export default function Centered({ d }) {
  return (
    <header className="hero hc">
      <div className="w">
        {d.photo && <img className="av" src={d.photo} alt={d.name} data-rv />}
        <span className="tag" data-rv>{d.role} · {d.location}</span>
        <h1 data-rv>{d.tagline}</h1>
        <p className="lead" data-rv>{lead(d)}</p>
        <Cta d={d} />
      </div>
    </header>
  )
}
