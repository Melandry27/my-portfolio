import React from "react"

import "./ProjectList.css"

import Projects from "../../model/Projects"
import Project from "./Project"
import Title from "./Title"

function ProjectList() {
	const projectList = Projects.map((project) => <Project key={project.id} project={project} />)
	return (
		<div id="project-list-container">
			<Title padding={"25%"} txt={"Mes Différents Projets"} />
			<div className="project-list">{projectList}</div>
		</div>
	)
}

export default ProjectList
