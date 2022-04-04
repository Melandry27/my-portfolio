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
					href="https://cdn-121.anonfiles.com/j7U1taTexf/9d0b03d4-1649060898/Melandry_MARCHAND_Resume_03-04-2022-21-00-15.pdf"
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
