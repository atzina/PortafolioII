import "./Nav.css";
import Icon from "../assets/logo.png"; 
import In from "../assets/in-icono.png";
import Hubicon from "../assets/icon-github.jpg";

function Nav() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img className="icon-nav" src={Icon}></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Sobre mí
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Trabajo
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contacto
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
        <div className="contenido-header">
          <div className="titulo-pagina">
            <h1>Soy Atzin, Front End Developer y Socióloga</h1>
          </div>
          <div className="redes">
            <img className="icon-nav" src={In}></img>
            <img className="icon-nav" src={Hubicon}></img>
          </div>
        </div>

      </header>
    </>
  );
}

export default Nav;
