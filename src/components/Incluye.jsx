const items = [
  { num: '01', texto: '4 horas de clase en vivo con Natalia Arredondo' },
  { num: '02', texto: 'Acceso a la grabación por 30 días' },
  { num: '03', texto: 'Plantillas de gestión: citas, finanzas, contenido' },
  { num: '04', texto: 'Caso de estudio completo de Rizos Felices' },
  { num: '05', texto: 'Certificado firmado por Rizos Felices Academia' },
  { num: '06', texto: 'Acceso al grupo privado de dueñas de salón' },
]

export default function Incluye() {
  return (
    <section className="incluye">
      <div className="incluye-inner">
        <div className="mono-label">→ Qué incluye</div>
        <h2>Formación completa + herramientas aplicables desde el primer día.</h2>

        <div className="incluye-grid">
          {items.map((item) => (
            <div className="incluye-item" key={item.num}>
              <div className="num">{item.num}</div>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
