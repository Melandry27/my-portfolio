import React from "react"

import "./ProjectList.css"

import Projects from "../../model/Projects"
import Project from "./Project"

function ProjectList() {
	const projectList = Projects.map((project) => <Project key={project.id} project={project} />)
	return (
		<div className="project-list-container">
			<div className="title-project-list">
				<h1>Mes differents Projets</h1>
				<hr />
			</div>
			<div className="project-list">{projectList}</div>
		</div>
	)
}

export default ProjectList
