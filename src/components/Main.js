import "./Main.css"

import Presentation from "./utils/Presentation"
import ProjectList from "./utils/ProjectList"
import Transition from "./utils/Transition"
import Technologie from "./utils/Technologie"
import AboutMe from "./utils/AboutMe"
import ContactContainer from "./utils/ContactContainer"

function Main() {
	return (
		<div className="main">
			<Presentation />
			<ProjectList />
			<Transition />
			<Technologie />
			<Transition />
			<AboutMe />
			<Transition />
			<ContactContainer />
			<Transition />
		</div>
	)
}

export default Main
