import "./Experience.css";

function Experience() {
  return (
    <>
      <div className="contenedor-experiencia">
        <div className="row">
          <div className="col-sm-4 mb-6 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <div className="contenedorcito-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                </div>
                <h5 className="card-title">Desarrollo Web</h5>
                <p className="card-text">
                Me gusta el aprendizaje constante y autodirigido, estoy siempre en busca de nuevas formas de superar desafíos y mejorar mi trabajo. Estoy practicando más sobre React y SQL y realizando proyectos independientes con WordPress.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="contenedorcito-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-people"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                </div>
                <h5 className="card-title">Sociología</h5>
                <p className="card-text">
                Mi experiencia en Sociología y Derechos Humanos, me ha formado a partir del pensamiento reflexivo y crítico de la realidad. A lo largo de mi carrera he desarrollado fuertes habilidades de comunicación, organización y planeación del trabajo. Exploro temas de Justicia Social y Tecnología. Me encanta la enseñanza.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="contenedorcito-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-graph-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                    />
                  </svg>
                </div>
                <h5 className="card-title">Ciencia de Datos</h5>
                <p className="card-text">
                Exploro diferentes roles en el mundo de la tecnología, entre los muchos que existen la Ciencia de Datos me interesa por que creo que muchas de mis habilidades técnicas en sociología son familiares con los datos, la documentación y los trabajos de análisis. Espero tener pronto una oportunidad de explorar profesionalmente este campo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
