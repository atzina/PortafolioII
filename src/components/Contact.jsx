import "./Contact.css";
import People from "../assets/people.jpg"

function Contact () {
    return (
        <>
            
            <div className="aboutme" id= "contact">
              <div className="div-uno-aboutme">
                <h1>Contacto</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illum aperiam blanditiis et quae assumenda! Magni similique doloribus rem necessitatibus doloremque. Quo accusantium modi optio id. Quis consectetur similique quod.
                </p>
               
              </div>
              <div className="div-dos-aboutme">
                <img className="image-aboutme" src={People}></img>
              </div>
            </div>
        </>

    )
}

export default Contact;