import Card from '../components/Card.jsx'

export default function Bento({ d }) {
  return <div className="pb">{d.projects.map((p, i) => <Card key={i} p={p} i={i} />)}</div>
}
