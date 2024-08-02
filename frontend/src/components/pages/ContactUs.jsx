// ContactUs.js
import React, { useState } from "react";
import styled from "styled-components";
import { api } from "../../auth/api"; // Import the api instance

const ContactContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 40px 20px;
	color: white;
`;

const ContactGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 40px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	margin-bottom: 20px;
	padding: 10px;
	font-size: 16px;
`;

const TextArea = styled.textarea`
	margin-bottom: 20px;
	padding: 10px;
	font-size: 16px;
	height: 150px;
`;

const SubmitButton = styled.button`
	background-color: #1e90ff;
	color: white;
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #1c86ee;
	}
`;

const ContactInfo = styled.div`
	h3 {
		margin-bottom: 20px;
	}
	p {
		margin-bottom: 10px;
	}
`;

const MapContainer = styled.div`
	height: 300px;
	width: 100%;
	margin-top: 20px;
`;

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await api.post(
				"/feedback/",
				formData
			);
			console.log("Form submitted successfully:", response.data);
			// Reset form after successful submission
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	// const mapCenter = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };

	return (
		<ContactContainer>
			<h1>Contact Us</h1>
			<ContactGrid>
				<div>
					<h2>Send us a message</h2>
					<ContactForm onSubmit={handleSubmit}>
						<Input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<Input
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<TextArea
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<SubmitButton type="submit">Send Message</SubmitButton>
					</ContactForm>
				</div>
				<ContactInfo>
					<h2>Contact Information</h2>
					<p>Address: 123 Dance Street, City, State, ZIP</p>
					<p>Phone: (123) 456-7890</p>
					<p>Email: info@aradhanadance.com</p>
					<p>Hours: Monday-Friday 9am-7pm, Saturday 10am-5pm</p>
					{/* <MapContainer>
						<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
							<GoogleMap
								mapContainerStyle={{ height: "100%", width: "100%" }}
								center={mapCenter}
								zoom={14}
							>
								<Marker position={mapCenter} />
							</GoogleMap>
						</LoadScript>
					</MapContainer> */}
				</ContactInfo>
			</ContactGrid>
		</ContactContainer>
	);
};

export default ContactUs;
