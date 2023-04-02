
import "./style.scss"
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"



const Footer = () => {
     
    return  <footer className="footer-section">

         <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experiance">Experiance</a></li>
            <li><a href="#portfolio"></a>Portfolio</li>
            <li><a href="#contact">Contact</a></li>

         </ul>

         <div className="footer-socials">
             <a href="https://github.com/"><AiFillGithub/></a>
             <a href="https://www.linkedin.com/in/serj-ayvazyan-494530263/"><AiFillLinkedin/></a>

         </div>
             <p>© Serzh Tutorials All rights reserved</p>
    </footer>
}

export default Footer