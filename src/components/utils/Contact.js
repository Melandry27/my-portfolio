import React from "react"
import "./Contact.css"

function Contact() {
	return (
		<div className="left-contact-container">
			<h2 className="contact-title">Mes Contacts</h2>
			<hr />
			<div className="nom">
				<p>Nom :</p>
				<p className="info">Melandry MARCHAND</p>
			</div>
			<div className="telephone">
				<p>Téléphone :</p>
				<p className="info">06 11 79 25 51</p>
			</div>
			<div className="email">
				<p>Email :</p>
				<p className="info">msmelandry@hotmail.fr</p>
			</div>
		</div>
	)
}

export default Contact
