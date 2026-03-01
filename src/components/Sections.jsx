import { useEffect, useRef } from 'react'
import './Sections.css'

const WA = 'https://wa.me/528110167661'

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const especialidades = [
  { icon: '🧠', name: 'Adolescentes', desc: 'Acompañamiento especializado para jóvenes en etapas de desarrollo y cambio.' },
  { icon: '💙', name: 'Depresión', desc: 'Estrategias basadas en evidencia para recuperar el equilibrio emocional y la motivación.' },
  { icon: '🌊', name: 'Estrés y Ansiedad', desc: 'Herramientas prácticas para gestionar la ansiedad y reducir el estrés cotidiano.' },
  { icon: '🛡️', name: 'Traumas', desc: 'Procesamiento y sanación de experiencias difíciles con acompañamiento profesional.' },
  { icon: '✨', name: 'Autoestima', desc: 'Reconecta con tu valor propio y construye una relación más sana contigo mismo.' },
]

const pasos = [
  { num: '01', title: 'Primera consulta', desc: 'Hablamos sobre lo que estás viviendo, sin juicios. Es un espacio seguro para que puedas expresarte con libertad.' },
  { num: '02', title: 'Plan personalizado', desc: 'Diseñamos juntos un plan terapéutico adaptado a tus necesidades, metas y ritmo de vida.' },
  { num: '03', title: 'Seguimiento continuo', desc: 'Sesiones regulares con herramientas prácticas para ver cambios reales en tu bienestar.' },
]

export function Especialidades() {
  const titleRef = useFadeIn()
  return (
    <section className="section" id="especialidades">
      <p className="section-label">Áreas de especialización</p>
      <h2 className="section-title fade-in" ref={titleRef}>Me especializo en<br />lo que más te preocupa</h2>
      <p className="section-desc">Con un enfoque Cognitivo Conductual, trabajo contigo para entender y transformar los patrones de pensamiento que afectan tu bienestar.</p>
      <div className="especialidades-grid">
        {especialidades.map((e, i) => (
          <div className="esp-card" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="esp-icon">{e.icon}</div>
            <h3 className="esp-name">{e.name}</h3>
            <p className="esp-desc">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Proceso() {
  const titleRef = useFadeIn()
  return (
    <section className="how-section" id="proceso">
      <p className="section-label">Proceso terapéutico</p>
      <h2 className="how-title fade-in" ref={titleRef}>Así funciona<br />nuestro trabajo juntos</h2>
      <div className="steps">
        {pasos.map((p, i) => (
          <div className="step" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="step-num">{p.num}</div>
            <h3 className="step-title">{p.title}</h3>
            <p className="step-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Quote() {
  const ref = useFadeIn()
  return (
    <section className="quote-section">
      <p className="big-quote fade-in" ref={ref}>
        "Pedir ayuda no es una señal de debilidad,<br />es el primer paso hacia el cambio."
      </p>
      <p className="quote-author">— Víctor Martínez, Psicólogo Clínico</p>
    </section>
  )
}

export function Contacto() {
  const ref = useFadeIn()

  const handleSubmit = () => {
    const nombre = document.getElementById('nombre').value
    const tema = document.getElementById('tema').value
    const mensaje = document.getElementById('mensaje').value
    let texto = `Hola Víctor, me llamo ${nombre || 'un visitante'} y me gustaría agendar una sesión.`
    if (tema) texto += ` Me interesa trabajar: ${tema}.`
    if (mensaje) texto += ` ${mensaje}`
    window.open(`${WA}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-info fade-in" ref={ref}>
        <p className="section-label" style={{ color: 'var(--teal)' }}>Contáctame</p>
        <h2>¿Listo para<br />dar el primer paso?</h2>
        <p>Agenda tu primera sesión hoy. La atención es completamente online, desde la comodidad de tu hogar.</p>
        <div className="contact-links">
          <a href={WA} target="_blank" rel="noreferrer" className="contact-link">
            <div className="contact-link-icon">💬</div>
            <span className="contact-link-text">8110167661</span>
          </a>
          <a href={WA} target="_blank" rel="noreferrer" className="contact-link">
            <div className="contact-link-icon">✉️</div>
            <span className="contact-link-text">psicovicmartinez@gmail.com</span>
          </a>
          <a href="https://instagram.com/psicovicmartinez" target="_blank" rel="noreferrer" className="contact-link">
            <div className="contact-link-icon">📸</div>
            <span className="contact-link-text">@psicovicmartinez</span>
          </a>
        </div>
      </div>
      <div className="contact-form-box">
        <h3>Agenda tu primera sesión</h3>
        <div className="form-group"><label>Nombre completo</label><input id="nombre" type="text" placeholder="Tu nombre" /></div>
        <div className="form-group"><label>Correo electrónico</label><input type="email" placeholder="tu@correo.com" /></div>
        <div className="form-group">
          <label>¿Qué te gustaría trabajar?</label>
          <select id="tema">
            <option value="">Selecciona una opción</option>
            <option>Ansiedad o estrés</option>
            <option>Depresión</option>
            <option>Autoestima</option>
            <option>Traumas</option>
            <option>Apoyo para adolescentes</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="form-group"><label>Mensaje (opcional)</label><textarea id="mensaje" placeholder="Cuéntame un poco más sobre cómo te puedo ayudar..." /></div>
        <button className="form-submit" onClick={handleSubmit}>Enviar mensaje por WhatsApp</button>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">Victor <span>Martínez</span> · Psicólogo Clínico</div>
      <div className="footer-links">
        <a href="#inicio">Inicio</a>
        <a href="#especialidades">Especialidades</a>
        <a href="#contacto">Contacto</a>
        <a href="https://instagram.com/psicovicmartinez" target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <span>2026 · Todos los derechos reservados</span>
    </footer>
  )
}
