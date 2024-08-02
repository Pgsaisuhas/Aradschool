import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CourseOne from "../../assets/CourseVideos/course-intro-one.mp4"
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
const CourseDetailsPage = styled.div`
	.course-details {
		padding: 20px;
		max-width: 1200px;
		margin: auto;
		color: white;
	}

	.course-header {
		text-align: center;
		margin-bottom: 20px;
	}

	.course-introduction {
		margin-bottom: 40px;
		text-align: center;
	}

	.course-introduction video {
		width: 100%;
		max-width: 600px;
		margin-bottom: 20px;
	}

	.course-cards {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;
	}

	.CourseCard {
		flex: 1;
		margin: 0 10px;
		text-align: center;
		position: relative;
	}

	.e-card {
		border: 1px solid #ccc;
		padding: 20px;
		border-radius: 8px;
		position: relative;
		overflow: hidden;
	}

	.e-card-image {
		position: relative;
	}

	.e-card-image video {
		width: 100%;
		max-width: 300px;
		margin-bottom: 20px;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.e-card-title {
		font-size: 1.5em;
		font-weight: bold;
	}

	.e-card-content {
		margin-bottom: 20px;
	}

	.e-card-actions .e-card-btn {
		background-color: #007bff;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.e-card-actions .e-card-btn a {
		color: white;
		text-decoration: none;
	}

	.e-card-actions .e-card-btn:hover {
		background-color: #0056b3;
	}
`;



const VideoCard = ({ video, title, description, link }) => {
	const [showControls, setShowControls] = useState(false);
	const {user} =  AuthData()
	const navigate = useNavigate()
	const handleButtonClick = (link) => {
		if (user) {
			navigate(link);
		} else {
			navigate({
				pathname: "/login",
				state: { from: link },
			});
		}
	}; 
	return (
		<div className="CourseCard">
			<div className="e-card">
				<div className="e-card-image">
					<video
						src={video}
						controls={showControls}
						onMouseEnter={() => setShowControls(true)}
						onMouseLeave={() => setShowControls(false)}
					>
						Your browser does not support the video tag.
					</video>
					<div className="e-card-title">{title}</div>
				</div>
				<div className="e-card-content">{description}</div>
				<div className="e-card-actions e-card-vertical">
					<button className="e-card-btn" onClick={()=>handleButtonClick(link)}>
						View Course
					</button>
				</div>
			</div>
		</div>
	);
};

const CourseCard = () => {
	const courses = [
		{
			id: 1,
			title: "Beginners Course",
			video: CourseOne,
			description:
				"An introductory course to Bharatanatyam, covering basic steps and movements.",
				link: `/courses/1`
		},
		{
			id: 2,
			title: "Intermediate Course",
			video: "",
			description:
				"A deeper dive into the techniques and expressions of Bharatanatyam.",
				link: `/courses/2`
		},
		{
			id: 3,
			title: "Mastering Bharatanatyam",
			video: "",
			description:
				"Advanced techniques and performances for mastering Bharatanatyam.",
				link: `/courses/3`
		},
	];

	return (
		<CourseDetailsPage>
			<div className="course-details">
				<header className="course-header">
					<h1>Course Details</h1>
					<p>Explore our comprehensive Bharatanatyam courses.</p>
				</header>

				<section className="course-introduction">
					<video src="intro-video-url" controls>
						Your browser does not support the video tag.
					</video>
					<p>
						Bharatanatyam is a major form of Indian classical dance that
						originated in Tamil Nadu. This course offers a journey through its
						history, significance, and techniques.
					</p>
				</section>

				<section className="course-cards">
					{courses.map((course) => (
						<VideoCard
							key={course.id}
							video={course.video || "default-video-url"}
							title={course.title}
							description={course.description}
							link={course.link}
						/>
					))}
				</section>
			</div>
		</CourseDetailsPage>
	);
};

const CourseDetails = () => {
	return (
		<>
			<CourseCard />
		</>
	);
};

export default CourseDetails;
