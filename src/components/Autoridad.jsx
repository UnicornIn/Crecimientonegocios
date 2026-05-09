const paises = [
  'Colombia', 'México', 'Ecuador', 'España',
  'Italia', 'Puerto Rico', 'Chile', 'Estados Unidos',
]

export default function Autoridad() {
  return (
    <section className="autoridad">
      <div className="autoridad-inner">
        <div className="mono-label">→ La autoridad</div>
        <h2>
          El único método enseñado{' '}
          <em>por quienes ya lo hicieron.</em>
        </h2>

        <p>Hay muchos cursos de negocio para peluquería. Este es distinto.</p>
        <p>
          Rizos Felices es la única marca en el mundo hispanohablante con
          productos, salones y academia capaces de potencializar a la competencia
          y crecer con ella. 19 salones propios en Colombia, México y Ecuador.
          Presencia en España, Italia, Puerto Rico, Chile y Estados Unidos.
        </p>
        <p>
          <strong>
            El sistema que vas a aprender no es teoría. Es lo que construyó el
            imperio.
          </strong>
        </p>

        <div className="paises-list">
          {paises.map((pais) => (
            <span key={pais}>{pais}</span>
          ))}
        </div>

        <div className="quote-anchor">
          <blockquote>
            Trabaja <em>EN</em> el negocio.<br />
            No <em>DEL</em> negocio.
          </blockquote>
          <cite>— Principio uno de Crecimiento de Salones</cite>
        </div>
      </div>
    </section>
  )
}
