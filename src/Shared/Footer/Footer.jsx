import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black bg-opacity-30 text-white">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link">Full Stack Web Development</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <Link to={'/'} className="link link-hover">Home</Link>
                <Link to={"/about"} className="link link-hover">About me</Link>
                <Link to={"/projects"} className="link link-hover">Projects</Link>
                <Link to={"/contact"} className="link link-hover">Contact</Link>
            </nav>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4 text-3xl opacity-60">

                    <Link to={`https://www.facebook.com/`} target="_blank" className=" hover:bg-blue-600 rounded-full "> <FaFacebook></FaFacebook></Link>
                    <Link to={`https://github.com/DipuBarua`} target="_blank" className="hover:text-black hover:bg-white rounded-full "><FaGithub /></Link>
                    <Link to={`https://www.linkedin.com/in/dipankar-barua-b1176b269/`} target="_blank" className="hover:text-blue-800 hover:bg-white"><FaLinkedin /></Link>
                    <Link to={``} target="_blank" className="hover:bg-white hover:text-black"><FaSquareXTwitter /></Link>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;