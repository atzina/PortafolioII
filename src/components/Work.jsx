import './Work.css';
import Compu from "../assets/compu.jpg";
import Cima from "../assets/CIMA.png";
import Diario from "../assets/diario-viaje.png";
import Disc from "../assets/discapacidad.png";
import Star from "../assets/star-wars.png";
import Power from "../assets/power-bi.png";
import Md from "../assets/mdlinks.png";
import React, { useState } from 'react';


function Work() {
  // define el estado pora la categoría seleccionada
  const[category, setCategory] = useState('all'); // Inicialmente, muestra todas las imágenes

  // define la función para manejar el cambio de categoría

  const hadleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  //array de objetos que contiene la información de cada imagen y su categoría

  const projectsData = [
    {src:Cima, category: 'wordpress'},
    {src:Diario, category: 'react'},
    {src: Disc, category: 'react'},
    {src: Power, category: 'power'},
    {src: Star, category: 'react'},
    {src: Md, category: 'nodejs'},
  ];

  //Filtra las imágenes según la categoría seleccionada

  const filteredProjects = category === 'all' ? projectsData : projectsData.filter(project => project.category === category);

  return (
    <>
      <div className="work">
        <div className='title-work'><h1>Mi Trabajo</h1></div>
        <div className='filter-buttons container-fluid'>
          
            <button onClick={() => hadleCategoryChange('all')}>Mostrar Todo</button>
            <button onClick={() => hadleCategoryChange('wordpress')}>WordPress</button>
            <button onClick={()=> hadleCategoryChange('react')}>React</button>
            <button onClick={()=> hadleCategoryChange('power')}>PowerBi</button>
            <button onClick={()=> hadleCategoryChange('nodejs')}>NodeJs</button>
         

        </div>
        <div className="projects">
          <div className="container text-center">
            <div className="row mostrar">

              {filteredProjects.map((project, index)=> (
                <div key={index} className='col-sm-1 col-md-4 col-lg-4'>
                  <img className='compu' src={project.src} alt= {`Project ${index}`}/>
                </div>
              ))}

              {/*<div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Cima}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Diario}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Disc}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Power}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Star}></img></div>
              <div class="col-sm-1 col-md-4 col-lg-4"><img className="compu" src={Md}></img></div> */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
