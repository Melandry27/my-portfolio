import React from "react"
import "./AboutMe.css"

import Title from "./Title"

function AboutMe() {
	return (
		<div id="aboutme-container">
			<div className="title-container">
				<Title padding={"36%"} txt={"À propos"} />
			</div>
			<div className="txt-container">
				<p className="txt">
					Bonjour, je m'appelle Melandry MARCHAND j'ai 22 ans, je recherche une alternance en tant
					que développeur web avec l'école CESI de Rouen. J'ai effectué une formation en 2019-2020 à
					l'ENI mais je continue de me former sur TheOdinProject.
				</p>
			</div>
		</div>
	)
}

export default AboutMe
