import { jump } from '../hooks.js'

const SOCIALS = [['github', 'GitHub'], ['linkedin', 'LinkedIn'], ['twitter', 'X'], ['instagram', 'Instagram']]
const LINKS = [['about', 'About'], ['services', 'Services'], ['work', 'Work'], ['experience', 'Journey'], ['contact', 'Contact']]

export default function Footer({ d }) {
  const top = e => { e.preventDefault(); e.currentTarget.closest('.pf')?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <footer className="ft">
      <div className="w">
        <div className="fg">
          <div>
            <b className="fb">{d.name}</b>
            <p>{d.role}. {d.availability}</p>
            <a href={`mailto:${d.email}`}>{d.email}</a>
          </div>
          <div>
            <h4>Pages</h4>
            {LINKS.map(([id, l]) => <a key={id} href={`#${id}`} onClick={jump(id)}>{l}</a>)}
          </div>
          <div>
            <h4>Elsewhere</h4>
            {SOCIALS.filter(([k]) => d[k]).map(([k, l]) => <a key={k} href={d[k]} target="_blank" rel="noreferrer">{l}</a>)}
            {!SOCIALS.some(([k]) => d[k]) && <span>Add your links in data.js</span>}
          </div>
        </div>
        <div className="fl">
          <span>© {new Date().getFullYear()} {d.name}. All rights reserved.</span>
          <a href="#top" onClick={top}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
