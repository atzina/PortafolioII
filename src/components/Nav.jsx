import "./Nav.css";
import Icon from "../assets/logo.png";
import In from "../assets/in-icono.png";
import Hubicon from "../assets/icon-github.png";

function Nav() {
  return (
    <>
      <header className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="icon-nav" src={Icon}></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Sobre mí
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Experiencia
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Trabajo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
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
            <img className="icon-head" src={Hubicon}></img>
            <img className="icon-head" src={In}></img>
          </div>
        </div>

      </header>
    </>
  );
}

export default Nav;
