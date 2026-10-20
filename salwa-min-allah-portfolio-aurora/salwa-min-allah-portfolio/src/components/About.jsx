import { skillsOf } from '../hooks.js'

export default function About({ d, t }) {
  const showPhoto = d.photo && (t.hero === 'Giant' || t.hero === 'Terminal')
  const facts = [['Location', d.location], ['Email', d.email], ['Status', d.availability]].filter(f => f[1])
  return (
    <section className="sec" data-s="about">
      <div className="w ab" data-rv>
        <div>
          <h2>About me</h2>
          {(d.about || '').split(/\n+/).filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
          {d.cv && <a className="bt o" href={d.cv} target="_blank" rel="noreferrer">Download CV</a>}
        </div>
        <div>
          {showPhoto && <img className="ap" src={d.photo} alt={d.name} />}
          <dl className="facts">
            {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <h3 className="sub">Skills</h3>
          <div className="chips">{skillsOf(d).map(s => <span key={s} className="chip">{s}</span>)}</div>
        </div>
      </div>
    </section>
  )
}
