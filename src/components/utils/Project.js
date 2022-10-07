import React from "react"
import "./Project.css"

function Project({ project }) {
	return (
		<div className="project-container">
			<img className="img" src={project.img} alt="" />
			<h2 className="title">{project.title}</h2>
			<h2 className="description">{project.description}</h2>
			<div className="stack-container">
				{project.stacks.map((stack) => (
					<p className="stack">{stack}</p>
				))}
			</div>
			<div className="codesource-container">
				<a className="codesource-link" href={project.link}>
					{"Code Source"}
				</a>
				{project.link2 && (
					<a className="codesource-link" href={project.link2}>
						{"Consulter !"}
					</a>
				)}
			</div>
		</div>
	)
}

export default Project
