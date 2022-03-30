import React from "react"
import "./Project.css"

function Project({ project }) {
	return (
		<div className="project-container">
			<img className="img" src={project.img} alt="" height={275} width={450} />
			<hr />
			<h2 className="title">{project.title}</h2>
			<h2 className="description">{project.description}</h2>
			<div className="stack-container">
				{project.stacks.map((stack) => (
					<p className="stack">{stack}</p>
				))}
			</div>
		</div>
	)
}

export default Project
