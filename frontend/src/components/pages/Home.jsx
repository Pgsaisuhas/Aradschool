import React from "react";
import styled from "styled-components"
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import img7 from "../../assets/images/img7.png"
import ImageSlider from "./ImageSlider";
import About from "../pages/About"
import { AuthData } from "../../auth/AuthWrapper";

const HomeContainer = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
`;

const Section = styled.section`
	margin-bottom: 40px;
`;
const images = [
	{ src: img1, alt: "Image 1" },
	{ src: img2, alt: "Image 2" },
	{ src: img3, alt: "Image 3" },
	{
		src: img4,
		alt: "Image 4",
	},
	{
		src: img5,
		alt: "Image 5",
	},
	{
		src: img6,
		alt: "Image 6",
	},
	{
		src: img7,
		alt: "Image 7",
	},
];


const Home = () => {
	const { userData } = AuthData() 
	return (
			<HomeContainer>
				<ImageSlider images={images} userName={userData.name} />
				<Section>
					<About />
					{/* <br />
					<WhyChooseUs /> */}
				</Section>
			</HomeContainer>
	);
};

export default Home;
