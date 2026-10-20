import { useState } from 'react'
import { jump } from '../hooks.js'

const LINKS = [['about', 'About'], ['services', 'Services'], ['work', 'Work'], ['experience', 'Journey'], ['contact', 'Contact']]

export default function Nav({ d }) {
  const [open, setOpen] = useState(false)
  const go = id => e => { setOpen(false); jump(id)(e) }
  return (
    <nav className={`nv${open ? ' open' : ''}`}>
      <div className="w">
        <b>{d.name}</b>
        <ul>
          {LINKS.map(([id, l]) => <li key={id}><a href={`#${id}`} onClick={go(id)}>{l}</a></li>)}
        </ul>
        <a className="bt hire" href={`mailto:${d.email}`}>Hire me</a>
        <button className="mb" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </nav>
  )
}
