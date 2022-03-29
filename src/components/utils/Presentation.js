import "./Presentation.css"
import WriteAnimation from "./WriteAnimation"
import ReactLogoAnimation from "./ReactLogoAnimation"

function Presentation() {
	return (
		<div className="presentation">
			<ReactLogoAnimation />
			<WriteAnimation />
		</div>
	)
}

export default Presentation
