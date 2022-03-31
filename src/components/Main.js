import "./Main.css"

import Presentation from "./utils/Presentation"
import ProjectList from "./utils/ProjectList"
import Transition from "./utils/Transition"
import Technologie from "./utils/Technologie"
import AboutMe from "./utils/AboutMe"

function Main() {
	return (
		<div className="main">
			<Presentation />
			<ProjectList />
			<Transition />
			<Technologie />
			<Transition />
			<AboutMe />
		</div>
	)
}

export default Main
