import ContactUs from "./pages/ContactUs";
import CourseDetails from "./pages/CourseDetials";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Profile from "./pages/Profile";
import {Register} from "./pages/Registration";

export const nav = [
	{
		path: "/",
		name: "Home",
		element: <Home />,
		isMenu: true,
		isPrivate: false,
	},
	{
		path: "/course-details",
		name: "CourseDetails",
		element: <CourseDetails />,
		isMenu: true,
		isPrivate: false,
	},
	{
		path: "/courses",
		name: "Courses",
		element: <Courses />,
		isMenu: false,
		isPrivate: true,
	},
	{
		path: "/courses/1",
		name: "CoursesOne",
		element: <Courses />,
		isMenu: false,
		isPrivate: true,
	},
	{
		path: "/courses/2",
		name: "CoursesTwo",
		element: <Courses />,
		isMenu: false,
		isPrivate: true,
	},
	{
		path: "/courses/3",
		name: "CoursesThree",
		element: <Courses />,
		isMenu: false,
		isPrivate: true,
	},
	{
		path: "/login",
		name: "Login",
		element: <Login />,
		isMenu: false,
		isPrivate: false,
	},
	{
		path: "/register",
		name: "Register",
		element: <Register />,
		isMenu: false,
		isPrivate: false,
	},
	{
		path: "/contact-us",
		name: "ContactUs",
		element: <ContactUs />,
		isMenu: true,
		isPrivate: false,
	},
	{
		path: "/profile",
		name: "Profile",
		element: <Profile />,
		isMenu: true,
		isPrivate: true,
	},
];
