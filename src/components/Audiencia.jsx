export default function Audiencia() {
  return (
    <section className="audiencia">
      <div className="audiencia-inner">
        <div className="audiencia-header">
          <div className="mono-label">→ Para quién</div>
          <h2>
            Diseñado para dueñas y dueños de salón{' '}
            <em>listos para crecer.</em>
          </h2>
        </div>

        <div className="audiencia-grid">
          <ul>
            <li>
              <span className="idx">i</span>
              <p>Salones establecidos que llevan años sin crecimiento real de facturación.</p>
            </li>
            <li>
              <span className="idx">ii</span>
              <p>Estilistas que quieren abrir su propio salón y hacerlo con método desde el día uno.</p>
            </li>
          </ul>
          <ul>
            <li>
              <span className="idx">iii</span>
              <p>Dueños de salón que dominan lo técnico pero saben que el problema es otro.</p>
            </li>
            <li>
              <span className="idx">iv</span>
              <p>Marcas emergentes de belleza que quieren escalar con sistema.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
