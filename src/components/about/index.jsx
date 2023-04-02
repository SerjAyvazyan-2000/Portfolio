import "./style.scss"
import me from "../../assets/images/me1.png"

import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {AiFillFolder} from "react-icons/ai"



const About = () => {
     
    return <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="G-container about-container" >
            <div className="about-content">
                  <div className="about-cards">

                     <article className="about-card">
                        <FaAward  className="about-icon"/>
                       <h5>Experiance</h5>
                       <small>0 Experiance</small>
                     </article>

                     <article className="about-card">
                        <FiUsers className="about-icon"/>
                       <h5>Clients</h5>
                       <small>0 Clients</small>
                     </article>

                     <article className="about-card">
                        <AiFillFolder className="about-icon"/>
                       <h5>Projects</h5>
                       <small>4 Completed</small>
                     </article>
                  </div>
                  <p>A self- motivated and creative web- developer 
                    graduate skilled at writing efficient and welldesigned codes using 
                    current best practices in Web development. Fast learner, hard-worker and team worker.
                    </p>
                  <a href="#contact" className="btn">Let`s Talk</a>
            </div>
        </div>
    </section>
}

export default About