import "./style.scss"
import {AiFillHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsFillBookmarksFill} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"
import {FiMessageSquare} from "react-icons/fi"
import {useState} from "react"


const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")


    return <nav>
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ''}><AiFillHome/></a>
        <a href="#about" onClick={() => setActiveNav("#about")}
           className={activeNav === "#about" ? "active" : ''}><AiOutlineUser/></a>
        <a href="#experiance" onClick={() => setActiveNav("#experiance")}
           className={activeNav === "#experiance" ? "active" : ''}><BsFillBookmarksFill/></a>
        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
           className={activeNav === "#portfolio" ? "active" : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav("#contact")}
           className={activeNav === "#contact" ? "active" : ''}><FiMessageSquare/></a>

    </nav>
}

export default Nav