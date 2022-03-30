import "./Main.css"

import Presentation from "./utils/Presentation"
import ProjectList from "./utils/ProjectList"
import Transition from "./utils/Transition"

function Main() {
	return (
		<div className="main">
			<Presentation />
			<ProjectList />
			<Transition />
		</div>
	)
}

export default Main
