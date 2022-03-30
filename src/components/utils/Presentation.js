import "./Presentation.css"

import ReactLogoAnimation from "./ReactLogoAnimation"
import WriteAnimation from "./WriteAnimation"
import Transition from "./Transition"

function Presentation() {
	return (
		<div className="presentation">
			<ReactLogoAnimation />
			<WriteAnimation />
			<Transition />
		</div>
	)
}

export default Presentation
