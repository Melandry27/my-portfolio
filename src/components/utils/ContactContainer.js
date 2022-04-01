import React from "react"

import "./ContactContainer.css"

import Title from "./Title"
import Contact from "./Contact"
import ContactForm from "./ContactForm"

function ContactContainer() {
	return (
		<React.Fragment>
			<Title txt={"Contact"} padding={"36%"}></Title>
			<div className="contact-container">
				<div className="contact-left-section">
					<Contact />
				</div>

				<div className="contact-right-section">
					<ContactForm />
				</div>
			</div>
		</React.Fragment>
	)
}

export default ContactContainer
