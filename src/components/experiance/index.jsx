
import "./style.scss"
import {BsFillPatchCheckFill} from "react-icons/bs"


const Experiance = () => {
     
    return <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>


      <div className="G-container experiance-container">
            <div className="experiance-frontend">
                <h3>Fronttend Development</h3>
                <div className="experiance-content">
                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                    <div>
                    <h4>HTML</h4>
                        <small className="text-light">Experianced</small>
                    </div>
                     </article>

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                     <div>
                     <h4>Css / sass / less</h4>
                        <small className="text-light">Experianced</small>
                     </div>
                     </article>

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                     <div>
                     <h4>Tailwind</h4>
                        <small className="text-light">Experianced</small>
                     </div>
                     </article>

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                  <div>
                  <h4>Bootstrap</h4>
                        <small className="text-light">Experianced</small>
                  </div>
                     </article>

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                     <div>
                     <h4>JavaSqript</h4>
                        <small className="text-light">Experianced</small>
                     </div>
                     </article>
       

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                  <div>
                  <h4>React.js</h4>
                        <small className="text-light">Experianced</small>
                  </div>
                     </article>

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                     <div>
                     <h4>Git/GitHub</h4>
                        <small className="text-light">Experianced</small>
                     </div>
                     </article>


                </div>
            </div>
             <div className="personal-skills">
             <h3>Personal Skills</h3>
                <div className="experiance-content">
                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                     <div>
                     <h4>Responsible</h4>
                        <small className="text-light">Experianced</small>
                     </div>
                     </article>

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                 <div>
                 <h4>Detail Oriented</h4>
                        <small className="text-light">Experianced</small>
                 </div>
                     </article>

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                  <div>
                  <h4>Punctual</h4>
                        <small className="text-light">Experianced</small>
                  </div>
                     </article>

                     <article className="experiance-details">
                         <BsFillPatchCheckFill/>
                      <div>
                      <h4>Comunicative</h4>
                        <small className="text-light">Experianced</small>
                      </div>
                     </article>

                </div>
             </div>
      </div>
    </section>
}

export default Experiance