import Compu from "../assets/compu.jpg";
import "./Aboutme.css";

function Aboutme () {
    return (
       <>
        <div className="aboutme">
            <div className="div-uno-aboutme">
                <h1>Sobre mí</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus facere perferendis minus doloribus, et recusandae id voluptate obcaecati ducimus iste nobis vel! Itaque, ex pariatur? Dolorum eum harum voluptates illum?</p>
            </div>
            <div className="div-dos-aboutme">
            <img className="image-aboutme" src={Compu}></img>

            </div>
        </div>
       </> 
    )
}

export default Aboutme;