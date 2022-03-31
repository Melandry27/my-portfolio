import React from "react"
import "./Techno.css"

function Techno({ img, txt, color }) {
	return (
		<div className="techno-container">
			<h1 className="logo" style={{ color: color }}>
				{img}
			</h1>
			<p className="txt">{txt}</p>
		</div>
	)
}

export default Techno
