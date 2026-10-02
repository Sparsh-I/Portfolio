import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <div className="flex flex-row justify-between items-center px-[5%] text-gray-500 mb-10 text-xl">
            <div>
                <p className="font-bold mb-4">Contact</p>
                <div className="grid grid-cols-1 gap-3">
                    <div className="hover:text-[#0077B5] flex flex-row gap-2 items-center">
                        <a href="https://linkedin.com/in/sparsh-inanda/" target="_blank"><FaLinkedin/></a>
                        <p>LinkedIn</p>
                    </div>
                    <div className="hover:text-white flex flex-row gap-2 items-center">
                        <a href="mailto:sparsh.poonacha@gmail.com"><FaEnvelope/></a>
                        <p>Email</p>
                    </div>
                </div>
            </div>
            <div>© 2026 Sparsh Inanda</div>
            <div>
                <p className="font-bold mb-4">Projects</p>
                <div className="grid grid-cols-1 gap-3">
                    <div className="hover:text-[#0FBF3E] flex flex-row gap-2 items-center">
                        <a href="https://github.com/Sparsh-I" target="_blank"><SiGithub/></a>
                        <p>GitHub</p>
                    </div>
                    <div className="hover:text-[#fa5c5c] flex flex-row gap-2 items-center">
                        <a href="https://sparsh-i.itch.io/" target="_blank"><FontAwesomeIcon icon={faItchIo}/></a>
                        <p>Itch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}