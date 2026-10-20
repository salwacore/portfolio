import './portfolio.css'
import Nav from './components/Nav.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useReveal, onColor } from './hooks.js'

export default function Portfolio({ template: t, data: d, Hero, Projects, mini = false }) {
  const ref = useReveal(t.id + JSON.stringify(d))
  const acc = d.accent || t.c.acc
  const vars = {
    '--bg': t.c.bg, '--fg': t.c.fg, '--mut': t.c.mut, '--card': t.c.card, '--ln': t.c.ln,
    '--acc': acc, '--on': onColor(acc),
    '--hf': `'${t.hf}'`, '--bf': `'${t.bf}'`, '--r': `${t.r}px`,
  }
  return (
    <div ref={ref} className={`pf fx-${t.fx} st-${t.style} m-${t.motion}${mini ? ' mini' : ''}`} style={vars}>
      <Nav d={d} />
      <Hero d={d} t={t} />
      <Stats d={d} />
      <About d={d} t={t} />
      <Services d={d} />
      <section className="sec" data-s="work">
        <div className="w">
          <h2 data-rv>Selected work</h2>
          <Projects d={d} />
        </div>
      </section>
      <Experience d={d} t={t} />
      <Testimonials d={d} />
      <Contact d={d} />
      <Footer d={d} />
    </div>
  )
}
