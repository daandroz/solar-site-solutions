import { useState } from 'react'
import './Navbar.css'

const WA = 'https://wa.me/528110167661'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }

  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">Victor <span>Martinez</span></div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href={WA} target="_blank" rel="noreferrer" className="nav-cta">Agendar cita</a></li>
        </ul>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={toggle} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <div className="mobile-menu-logo">Victor <span>Martinez</span></div>
        <a href="#inicio" onClick={close}>Inicio</a>
        <a href="#especialidades" onClick={close}>Especialidades</a>
        <a href="#proceso" onClick={close}>Proceso</a>
        <a href={WA} target="_blank" rel="noreferrer" className="mob-cta" onClick={close}>Agendar cita</a>
      </div>
    </>
  )
}
