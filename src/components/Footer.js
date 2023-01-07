import {FaGithub, FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div>
            <a href="https://github.com/TheAnswer07" className="social-links" target="_blank" noreferrer="true">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/moussa-dia7/" className="social-links" target="_blank" noreferrer="true">
            <FaLinkedin/>
            </a>
        </div>

    </footer>

    </>
  )
}
export default Footer