export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="mono-tag">Masterclass · Dueñas y dueños de salón</div>
        <h1>
          Triplica la facturación de <br />
          tu salón en <span className="big">3 pasos</span>.
        </h1>
        <p className="subtitle">
          El sistema probado que construyó la cadena de salones especializados
          en rizos más grande del mundo hispanohablante.
        </p>
        <div className="meta-row">
          <div className="meta-item">
            <div className="mono">Duración</div>
            <div className="val">4 horas en vivo</div>
          </div>
          <div className="meta-item">
            <div className="mono">Instructora</div>
            <div className="val">Natalia Arredondo</div>
          </div>
          <div className="meta-item">
            <div className="mono">Formato</div>
            <div className="val">En vivo + grabación</div>
          </div>
        </div>
        <a href="#precio" className="cta-primary">
          Quiero crecer mi salón
          <span className="arrow">→</span>
        </a>
        <div className="hero-micro">Cupos limitados · Inscripciones abiertas</div>
      </div>

      <div className="hero-data">
        <div className="label">→ Validación de resultados</div>
        <h3>El sistema aplicado a la red Rizos Felices.</h3>
        <div className="stat-grid">
          <div className="stat">
            <div className="num">19</div>
            <div className="desc">Salones<br />propios</div>
          </div>
          <div className="stat">
            <div className="num">8</div>
            <div className="desc">Países con<br />presencia</div>
          </div>
          <div className="stat">
            <div className="num">3×</div>
            <div className="desc">Crecimiento<br />promedio</div>
          </div>
          <div className="stat">
            <div className="num">+20Y</div>
            <div className="desc">De método<br />probado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
