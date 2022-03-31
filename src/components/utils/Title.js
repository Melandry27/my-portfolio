import React from "react"
import "./Title.css"

function Title({ txt, padding }) {
	return (
		<div className="title-container">
			<h1 className="title">{txt}</h1>
			<hr
				className="hr"
				style={{
					marginTop: "20px",
					marginRight: padding,
					marginLeft: padding,
					border: "solid 1px#7f5943",
				}}
			/>
		</div>
	)
}

export default Title
