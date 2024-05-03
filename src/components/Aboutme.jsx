import Compu from "../assets/compu.jpg";
import Luz from "../assets/luz.jpg";
import Foco from "../assets/foco.jpg"
import People from "../assets/people.jpg";
import "./Aboutme.css";

function Aboutme() {
  return (
    <>
    
            <div className="aboutme" id="aboutme">
              <div className="div-uno-aboutme">
                <h1>Sobre mí</h1>
                <p>
                  Busco hacer diferencias en el mundo a través de la tecnología.
                  Me apasiona explorar cómo podemos utilizarla para construir
                  conexiones significativas entre las personas y mejorar
                  nuestras vidas.
                </p>
                <p>
                  Mi formación y experiencia en Sociología me han enseñado la
                  importancia de escuchar las necesidades de los demás. Me
                  enorgullece aplicar estas habilidades en mi trabajo en
                  desarrollo web, colaborando con equipos para crear soluciones
                  atractivas y funcionales para las personas.
                </p>
              </div>
              <div className="div-dos-aboutme">
                <img className="image-aboutme" src={Foco}></img>
              </div>
            </div>
         
    </>
  );
}

export default Aboutme;
