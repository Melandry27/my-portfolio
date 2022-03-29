import "./Nav.css"
import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa"

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
						<a href="default.asp">Projets</a>
					</li>
					<li>
						<a href="contact.asp">Technologies</a>
					</li>
					<li>
						<a href="about.asp">À propos</a>
					</li>
				</ul>
			</div>
			<div className="link-icone">
				<a className="github-link" href="https://github.com/Melandry27">
					<FaGithub />
				</a>
				<a className="linkedin-link" href="https://www.linkedin.com/in/melandry-marchand/">
					<FaLinkedin />
				</a>
			</div>
		</div>
	)
}

export default Nav
