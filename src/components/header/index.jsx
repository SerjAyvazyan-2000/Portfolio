import React, {useRef} from 'react';
import CTA from "./CTA"
import "./style.scss"
import me from "../../assets/images/me2.png"
import HeaderSocials from "./headerSocials"


const Header = () => {


    return <header>
        <div className='G-container'>
            <div className=" header-container">
                <div className='header-info'>
                    <h5>Hello I`m</h5>
                    <h1>Serzh Ayvazyan</h1>
                    <h5 className="text-light">Frontend Developer</h5>
                </div>

                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={me} alt="me"/>
                </div>

                <a href="#contact" className="scroll-down">Scrool Down</a>
            </div>
        </div>

    </header>
}

export default Header