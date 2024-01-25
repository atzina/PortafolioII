import './Work.css';
import Compu from "../assets/compu.jpg";
import Cima from "../assets/CIMA.png";
import Diario from "../assets/diario-viaje.png";
import Disc from "../assets/discapacidad.png";
import Star from "../assets/star-wars.png";
import Power from "../assets/power-bi.png";
import Md from "../assets/mdlinks.png";


function Work() {
  return (
    <>
      <div className="work">
        <div className='title-work'><h1>Mi Trabajo</h1></div>
        <div className="projects">
          <div class="container text-center">
            <div class="row">
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Cima}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Diario}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Disc}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Power}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Star}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Md}></img></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
