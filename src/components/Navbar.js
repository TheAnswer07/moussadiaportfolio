import { Link } from "react-router-dom";
import Logo from "../images/LogoYizmoD.png";
import { useRef } from "react";

const Navbar = () => {

    return (
        <nav>
            <Link to="/"><img src={Logo} className="logo" height="45px" alt="" /></Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">ABOUT ME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">PROJECTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/education">EDUCATION</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/career">CAREER HISTORY</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/skills">SKILLS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar