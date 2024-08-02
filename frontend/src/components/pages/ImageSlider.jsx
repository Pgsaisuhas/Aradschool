import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSliderWrapper = styled.div`
	.image-carousel {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.image-container {
		position: relative;
		height: 100vh;
	}

	.carousel-image {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}

	.overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.5);
		padding: 2rem;
		text-align: center;
		color: white;
		max-width: 600px;
	}

	.title {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.release-info {
		font-size: 1rem;
		margin-bottom: 2rem;
	}

	.subscribe-button {
		background-color: #ffffff;
		color: #000000;
		border: none;
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		cursor: pointer;
		margin-bottom: 1rem;
		transition: background-color 0.3s ease;
	}

	.subscribe-button:hover {
		background-color: #ddd;
	}

	.price {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.gift-info {
		font-size: 1rem;
	}
`;

const ImageSlider = ({ images, userName }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<ImgSliderWrapper>
			<div className="image-carousel">
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index} className="image-container">
							<img src={image.src} alt={image.alt} className="carousel-image" />
						</div>
					))}
				</Slider>
				<div className="overlay">
					<h3>
						{userName && <p className="user-name">Welcome, {userName}!</p>}
					</h3>
					<h1 className="title">Aradhana School of Dance</h1>
					<h2 className="subtitle">Now offered Online!!</h2>
					<p className="description">
						A streaming, on demand training program for Bharatanatyam. The
						program offers strength and conditioning, dance technique and
						repertoire.
					</p>

					<button className="subscribe-button">SUBSCRIBE NOW</button>
					<p className="price">₹1,500 a month</p>
					<p className="gift-info">Gift this or purchase videos individually</p>
				</div>
			</div>
		</ImgSliderWrapper>
	);
};

ImageSlider.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		})
	).isRequired,
	userName: PropTypes.string, // Add this line to specify the prop type for userName
};

export default ImageSlider;
