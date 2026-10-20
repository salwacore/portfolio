import { jump } from '../hooks.js'

export default function Cta({ d }) {
  return (
    <div className="cta" data-rv>
      <a className="bt" href="#work" onClick={jump('work')}>See my work</a>
      <a className="bt o" href={`mailto:${d.email}`}>Get in touch</a>
    </div>
  )
}
