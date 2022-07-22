import "./Nav.css"
import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa"
import { AiOutlineFilePdf } from "react-icons/ai"

function Nav() {
	return (
		<div className="nav">
			<div className="left-section">
				<h1 className="unlink-icone">
					<FaReact />
				</h1>
				<h1 className="unlink">Portfolio</h1>
			</div>
			<div className="link">
				<ul className="link-ul">
					<li>
						<a href="#project-list-container">Projets</a>
					</li>
					<li>
						<a href="#technologie-container">Technologies</a>
					</li>
					<li>
						<a href="#aboutme-container">À propos</a>
					</li>
				</ul>
			</div>
			<div className="link-icone">
				<a
					className="github-link"
					href="https://anonfiles.com/8drfY2z2yb/Melandry-Marchand-Alternance-CV_pdf"
				>
					<AiOutlineFilePdf />
				</a>

				<a className="github-link" href="https://github.com/Melandry27">
					<FaGithub />
				</a>
				<a className="linkedin-link" href="https://www.linkedin.com/in/melandry-marchand27/">
					<FaLinkedin />
				</a>
			</div>
		</div>
	)
}

export default Nav
