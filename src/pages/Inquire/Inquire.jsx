import './Inquire.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Inquire = () => {
	const form = useRef();
	const [messageSent, setMessageSent] = useState(false); // State variable to manage message visibility

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_1fog7jr', 'template_gnv522h', form.current, '38R-GxB-JxYZ7fTz5')
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
					e.target.reset();
					setMessageSent(true); // Set the state variable to true after successful submission
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<main className='inquire-main'>
			<h1 className='inquire-h1'>INQUIRY</h1>
			{messageSent && <p className='message-sent'>Message Sent!</p>} {/* Conditional rendering of the message */}
			<div className='form-div'>
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type='text' name='user_name' className='name-input' />
					<label>Email</label>
					<input type='email' name='user_email' className='user-input' />
					<label className='message-label'>Message</label>
					<textarea name='message' />
					<input type='submit' value='Inquire' className='btn-submit' />
				</form>
			</div>
			<div className='services-h3'>
				<h3>SERVICES</h3>
			</div>
			<div className='inquire-div'>
				<ul className='inquire-ul'>
					<li>Brand Identity</li>
					<li>Custom Logotype</li>
					<li>Website Design & Development</li>
					<li>Illustrations</li>
					<li>Print Collateral</li>
					<li>Digital Art</li>
					<li>Other</li>
				</ul>
			</div>
		</main>
	);
};

export default Inquire;
