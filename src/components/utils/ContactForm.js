import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import "./ContactForm.css"

function ContactForm() {
	const [result, showResult] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs.sendForm("service_ctwiz5b", "template_qjikil2", e.target, "F9GWMw_KisgA_wqAp").then(
			(result) => {
				console.log(result.text)
			},
			(error) => {
				console.log(error.text)
			},
		)
		e.target.reset()
		showResult(true)
	}

	const Result = () => {
		return (
			<React.Fragment>
				<p>Votre message a bien était envoyé, je vous contacterais dès que possible.</p>
				<button onClick={() => showResult(false)}>Effacer</button>
			</React.Fragment>
		)
	}

	return (
		<div className="right-contact-container">
			<h2 className="contact-title">Me Contacter</h2>
			<hr />
			<form action="" onSubmit={sendEmail}>
				<div className="form-container">
					<span>Nom</span>
					<br />
					<input class="input100" type="text" name="fullName" required />
					<br />
					<span>Numéro de Téléphone</span>
					<br />
					<input class="input100" type="text" name="phone" required />
					<br />
					<span>Email</span>
					<br />
					<input class="input100" type="text" name="email" required />
					<br />

					<span>Message</span>
					<br />
					<textarea name="message" required></textarea>
					<br />
					<button>Envoyer !</button>
				</div>

				<div className="show-result">{result ? <Result /> : null}</div>
			</form>
		</div>
	)
}

export default ContactForm
