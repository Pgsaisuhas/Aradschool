import React from "react";
import styled from "styled-components";

const Gmaps = styled.div`
	.about {
		padding: 20px;
		text-align: center;
		background-color: #1b2b38;
		color: #fff;
		border-radius: 8px;
		// box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin: 20px;
	}

	.about h1,
	.about h2 {
		margin-top: 20px;
		color: #fff;
	}

	.about p {
		margin: 10px 0;
		line-height: 1.6;
		color: #fff;
	}

	.about iframe {
		margin-top: 20px;
		width: 100%;
		height: 450px;
		border: 0;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.section_head {
		background-color: #00796b;
		padding: 10px;
		border-radius: 8px;
		color: white;
		margin: 20px 0;
	}

	.section_head h2 {
		margin: 0;
	}
`;

const About = () => {
	return (
		<>
			<Gmaps>
				<div className="about">
					<div className="section_head">
						<h1>About Us</h1>
					</div>
					<p>
						Aradhana Dance School was founded with the vision of preserving and
						promoting the rich heritage of Indian classical dance. Our mission
						is to provide high-quality dance education and training to students
						of all ages and skill levels. Our experienced instructors are
						dedicated to helping students achieve their full potential in the
						art of dance.
					</p>
					<p>
						Our school offers a variety of programs and classes designed to suit
						different interests and skill levels, from beginners to advanced
						dancers. We believe in fostering a supportive and inclusive
						environment where students can express themselves and develop their
						creativity through dance.
					</p>

					<div className="section_head">
						<h2>Founder</h2>
					</div>
					<p>
						With a remarkable 15-year commitment to Bharatnatyam, Shravani not
						only dazzles as a seasoned performer but also emerges as a prominent
						contender, winning every dance competition throughout her schooling
						years. Her talent earned her the title of "Ms. Swing and Swirl."
						Additionally, she actively participates in cultural events organized
						by ISRO and inter-collegiate competitions. Notably, she clinched the
						first prize in a college-level competition. Furthermore, she
						generously shares her expertise by training Sri Satya Sai Balvikas
						students, nurturing them not only as performers but also as Balvikas
						students themselves. As a Balvikas student, she showcased her
						dedication by performing at the Maatru vandannam program held at
						Satya Sai Ashram in Whitefield, Bangalore. Her recent establishment,
						Aaradhana Dance School, made a grand entrance with an enchanting
						performance at Nagaligeshwara Swamy Temple kundanahalli Bangalore.
					</p>

					<div className="section_head">
						<h2>Vision</h2>
					</div>
					<p>
						Our vision is to be a beacon of excellence in the world of
						Bharatanatyam, inspiring a global community of dancers and
						enthusiasts who cherish and uphold the rich cultural heritage of
						this classical art form.
					</p>

					<div className="section_head">
						<h2>Mission</h2>
					</div>
					<p>
						To preserve the purity and integrity of Bharatanatyam while
						promoting its relevance to contemporary audiences. We aim to provide
						comprehensive training and foster artistic excellence, empowering
						students to become passionate ambassadors of this timeless art form.
					</p>

					<div className="section_head">
						<h2>Location</h2>
					</div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.157205982284!2d77.71347940933809!3d12.961790515043186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13cb3d7e2a27%3A0xa33985d4c650a0cc!2s1579%2C%204th%20Main%20Rd%2C%20E%20Block%2C%20AECS%20Layout%2C%20Brookefield%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1721460772464!5m2!1sen!2sin"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</Gmaps>
		</>
	);
};

export default About;
