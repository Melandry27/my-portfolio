import React from "react"
import "./Technologie.css"

import { FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiJavascript, SiReact, SiGit, SiMongodb } from "react-icons/si"
import { RiEnglishInput } from "react-icons/ri"

import Techno from "./Techno"
import Title from "./Title"

function Technologie() {
	return (
		<div id="technologie-container">
			<Title padding={"36%"} txt={"Technologies"} />
			<div className="technologie-list-container">
				<Techno color={"#eb4034"} img={<FaHtml5 />} txt={"HTML"} />
				<Techno color={"#3459eb"} img={<FaCss3Alt />} txt={"CSS"} />
				<Techno color={"#cfe02f"} img={<SiJavascript />} txt={"JavaScript"} />
				<Techno color={"#4c768d"} img={<SiReact />} txt={"React"} />
				<Techno color={"#eb4034"} img={<SiGit />} txt={"Git"} />
				<Techno color={"#64e02f"} img={<SiMongodb />} txt={"MongoDB"} />
				<Techno color={"black"} img={<RiEnglishInput />} txt={"English"} />
			</div>
		</div>
	)
}

export default Technologie
