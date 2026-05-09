const pasos = [
  {
    num: '01',
    label: 'Paso uno',
    titulo: 'Manejo de clientes',
    descripcion:
      'Gestión de citas, experiencia del cliente, fidelización. Cómo convertir cada visita en la siguiente visita — y en la recomendación que te trae dos clientas nuevas.',
    items: ['Gestión de citas', 'Experiencia del cliente', 'Fidelización'],
  },
  {
    num: '02',
    label: 'Paso dos',
    titulo: 'Finanzas',
    descripcion:
      'Cómo leer los números de tu salón. Qué cobrar. Qué márgenes sostener. Cómo saber si estás creciendo de verdad o solo trabajando más.',
    items: ['Estructura de precios', 'Márgenes y rentabilidad', 'Indicadores clave'],
  },
  {
    num: '03',
    label: 'Paso tres',
    titulo: 'Marketing y ventas',
    descripcion:
      'Redes sociales con intención. Procesos que convierten seguidores en clientas. El sistema de contenido que construyó la comunidad de Rizos Felices — adaptado a tu escala.',
    items: ['Contenido en redes', 'Procesos de conversión', 'Ventas en salón'],
  },
]

export default function Metodo() {
  return (
    <section className="metodo" id="metodo">
      <div className="metodo-inner">
        <div className="metodo-header">
          <div className="mono-label">→ El método · 3 pasos</div>
          <h2>
            Triplica tu facturación <em>en tres pasos</em> simples.
          </h2>
        </div>

        <div className="pasos">
          {pasos.map((paso) => (
            <div className="paso" key={paso.num}>
              <div className="num-wrap">
                <div className="num">{paso.num}</div>
              </div>
              <div className="label">{paso.label}</div>
              <h3>{paso.titulo}</h3>
              <p>{paso.descripcion}</p>
              <ul>
                {paso.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
