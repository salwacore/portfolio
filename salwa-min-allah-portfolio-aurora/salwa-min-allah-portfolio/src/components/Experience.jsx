function Block({ title, items, v }) {
  return (
    <div data-rv>
      <h3 className="sub">{title}</h3>
      <div className={v}>
        {items.map((x, i) => (
          <div className="it" key={i}>
            <span className="pd">{x.period}</span>
            <div><h4>{x.role}</h4><b>{x.org}</b></div>
            {x.d && <p>{x.d}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Journey: work experience + education. t.exp picks the look: "Timeline" or "Rows". */
export default function Experience({ d, t }) {
  const blocks = [['Experience', d.experience], ['Education', d.education]].filter(([, items]) => items?.length)
  if (!blocks.length) return null
  const rows = t.exp === 'Rows'
  return (
    <section className="sec" data-s="experience">
      <div className="w">
        <h2 data-rv>My journey</h2>
        <div className={`xx${rows || blocks.length === 1 ? ' r' : ''}`}>
          {blocks.map(([title, items]) => <Block key={title} title={title} items={items} v={rows ? 'xr' : 'xt'} />)}
        </div>
      </div>
    </section>
  )
}
