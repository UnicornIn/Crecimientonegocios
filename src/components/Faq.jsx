const preguntas = [
  {
    q: '¿Necesito experiencia administrativa previa?',
    a: 'No. El curso está diseñado para que cualquier dueña de salón pueda aplicar el sistema desde el primer día, sin conocimiento previo de finanzas o marketing.',
  },
  {
    q: '¿Funciona si mi salón no es de rizos?',
    a: 'Sí. El sistema es de gestión de salón de belleza. Los principios aplican a cualquier especialidad.',
  },
  {
    q: '¿Cuánto tiempo toma ver resultados?',
    a: 'Depende del punto de partida de cada salón. Los salones de la red Rizos Felices típicamente ven cambios medibles en facturación entre el tercer y sexto mes.',
  },
  {
    q: '¿Puedo tomarlo junto con el Seminario de Definiciones?',
    a: 'Sí. Los dos cursos son complementarios: uno domina la técnica, el otro domina el negocio. Muchas profesionales se inscriben a ambos.',
  },
  {
    q: '¿Hay opción de pago en cuotas?',
    a: 'Sí. Ofrecemos pago en hasta 3 cuotas sin interés a través de los medios de pago habituales. Consulta al momento de inscribirte.',
  },
]

export default function Faq() {
  return (
    <section className="faq">
      <div className="faq-inner">
        <div className="mono-label">→ Preguntas frecuentes</div>
        <h2>
          Lo que conviene <em>saber</em> antes de inscribirse.
        </h2>

        <div className="faq-list">
          {preguntas.map((item) => (
            <div className="faq-item" key={item.q}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
