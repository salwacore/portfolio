import { useEffect, useRef, useState } from 'react'

/** Adds the "in" class to [data-rv] elements when they scroll into view. */
export function useReveal(dep) {
  const ref = useRef(null)
  useEffect(() => {
    const els = [...(ref.current?.querySelectorAll('[data-rv]:not(.in)') || [])]
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.1 })
    els.forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [dep])
  return ref
}

/** Types text out one character at a time. */
export function useTyped(text, speed = 24) {
  const [n, setN] = useState(0)
  useEffect(() => {
    setN(0)
    const id = setInterval(() => setN(x => (x >= text.length ? (clearInterval(id), x) : x + 1)), speed)
    return () => clearInterval(id)
  }, [text, speed])
  return text.slice(0, n)
}

export const skillsOf = d => (d.skills || '').split(',').map(s => s.trim()).filter(Boolean)
export const lead = d => (d.about || '').split(/(?<=[.!?])\s/)[0]

/** Readable text colour (black/white) for a given background hex. */
export function onColor(h) {
  const m = /^#?([0-9a-f]{6})$/i.exec(h || '')
  if (!m) return '#fff'
  const n = parseInt(m[1], 16)
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 150 ? '#111' : '#fff'
}

/** Smooth-scroll to a section inside the same portfolio. */
export const jump = id => e => {
  e.preventDefault()
  e.currentTarget.closest('.pf')?.querySelector(`[data-s="${id}"]`)?.scrollIntoView({ behavior: 'smooth' })
}
