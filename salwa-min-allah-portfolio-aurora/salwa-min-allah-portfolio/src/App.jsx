import Portfolio from './Portfolio.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import template from './template.js'
import data from './data.js'

export default function App() {
  return <Portfolio template={template} data={data} Hero={Hero} Projects={Projects} />
}
