import { useEffect, useRef } from 'react'
import './Hero.css'

const WA = 'https://wa.me/528110167661'

function BrainSVG() {
  return (
    <svg className="brain-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="28" stroke="#00BCD4" strokeWidth="2.5"/>
      <circle cx="50" cy="50" r="5" fill="#00BCD4"/>
      <circle cx="50" cy="28" r="3.5" fill="#00BCD4"/>
      <circle cx="50" cy="72" r="3.5" fill="#00BCD4"/>
      <circle cx="28" cy="50" r="3.5" fill="#00BCD4"/>
      <circle cx="72" cy="50" r="3.5" fill="#00BCD4"/>
      <circle cx="34" cy="34" r="3" fill="#00BCD4"/>
      <circle cx="66" cy="34" r="3" fill="#00BCD4"/>
      <circle cx="34" cy="66" r="3" fill="#00BCD4"/>
      <circle cx="66" cy="66" r="3" fill="#00BCD4"/>
      {[28,72,28,72,34,66,34,66].map((x, i) => {
        const ys = [50,50,50,50,34,34,66,66]
        return <line key={i} x1="50" y1="50" x2={x} y2={ys[i]} stroke="#00BCD4" strokeWidth="1.5"/>
      })}
    </svg>
  )
}

export default function Hero() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      leftRef.current?.classList.add('visible')
      setTimeout(() => rightRef.current?.classList.add('visible'), 200)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero-left fade-in" ref={leftRef}>
        <div className="hero-tag">Agenda abierta &middot; Atención online</div>
        <h1 className="hero-title">Tu bienestar<br /><span className="accent">mental</span> importa</h1>
        <p className="hero-subtitle">Psicólogo Clínico &middot; Cognitivo Conductual</p>
        <p className="hero-quote">"A veces hay situaciones que nos sobrepasan. Es normal y está bien sentir que no podemos solos con todo."</p>
        <div className="hero-btns">
          <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Agenda tu primera sesión</a>
          <a href="#especialidades" className="btn-secondary">Conoce mis especialidades</a>
        </div>
      </div>
      <div className="hero-right fade-in" ref={rightRef}>
        <div className="hero-card">
          <BrainSVG />
          <h2 className="card-name">Víctor Martínez</h2>
          <p className="card-title">Psicólogo Clínico</p>
          <p className="card-sub">Clínico Cognitivo Conductual</p>
          <div className="card-stats">
            <div className="stat"><div className="stat-number">TCC</div><div className="stat-label">Enfoque basado en evidencia</div></div>
            <div className="stat"><div className="stat-number">100%</div><div className="stat-label">Atención personalizada</div></div>
          </div>
          <div className="card-badge"><div className="badge-dot" />Agenda abierta — Disponible ahora</div>
        </div>
      </div>
    </section>
  )
}
