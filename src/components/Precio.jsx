export default function Precio() {
  return (
    <section className="precio" id="precio">
      <div className="precio-inner">
        <div className="mono-label">→ Inversión</div>
        <h2>
          El curso cuesta menos que <em>una mala semana</em> de facturación.
        </h2>
        <div className="price-display">
          <div>
            <div className="price">USD 69</div>
            <span className="label">Mercados internacionales</span>
          </div>
          <div className="divider"></div>
          <div>
            <div className="price">COP 300.000</div>
            <span className="label">Colombia</span>
          </div>
        </div>
        <a href="http://wa.me/573128487838" className="cta-primary">
          Reservar mi cupo
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}
