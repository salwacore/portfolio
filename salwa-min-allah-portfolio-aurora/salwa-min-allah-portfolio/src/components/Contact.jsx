const SOCIALS = [['github', 'GitHub'], ['linkedin', 'LinkedIn'], ['twitter', 'X'], ['instagram', 'Instagram']]

export default function Contact({ d }) {
  // No backend needed: the form opens the visitor's email app with the message filled in.
  const send = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${d.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + f.get('name'))}&body=${encodeURIComponent(body)}`
  }
  return (
    <section className="sec" data-s="contact">
      <div className="w cx" data-rv>
        <div>
          <h2>Let’s work together</h2>
          <p className="lead">{d.availability || 'Available for new projects.'} Tell me a little about what you need and I’ll reply within two working days.</p>
          <ul className="ci">
            <li><span>Email</span><a href={`mailto:${d.email}`}>{d.email}</a></li>
            {d.location && <li><span>Based in</span>{d.location}</li>}
          </ul>
          <div className="soc">
            {SOCIALS.filter(([k]) => d[k]).map(([k, l]) => <a key={k} href={d[k]} target="_blank" rel="noreferrer">{l}</a>)}
          </div>
        </div>
        <form className="fm" onSubmit={send}>
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="bt" type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}
