import { Link, Route, Routes, Navigate } from "react-router-dom";
import { nav } from "./Navigation";
import { AuthData } from "../auth/AuthWrapper";



export const RenderRoutes = () => {
	const { user } = AuthData();
    console.log(user)

	// if (!user) {
	// 	return <p>Loading...</p>; // Or handle loading state as appropriate
	// }

	return (
		<Routes>
			{nav.map((r, i) => {
				if (r.isPrivate) {
					return user ? (
						<Route key={i} path={r.path} element={r.element} />
					) : (
						<Route key={i} path={r.path} element={<Navigate to="/login" />} />
					);
				} else {
					return <Route key={i} path={r.path} element={r.element} />;
				}
			})}
		</Routes>
	);
};

export const RenderMenu = () => {
	const { handleLogout } = AuthData();
    const { user } = AuthData();
    console.log(user);
	// if (!user) {
	// 	return <p>Loading...</p>; // Or handle loading state as appropriate
	// }

	const MenuItem = ({ r }) => (
		<div className="menuItem">
			<Link to={r.path}>{r.name}</Link>
		</div>
	);

	return (
		<div className="menu">
			{nav.map((r, i) => {
				if (!r.isPrivate && r.isMenu) {
					return <MenuItem key={i} r={r} />;
				} else if (user && r.isMenu) {
					return <MenuItem key={i} r={r} />;
				} else return null;
			})}

			{user ? (
				<div className="menuItem">
					<Link to="/login" onClick={handleLogout}>
						Log out
					</Link>
				</div>
			) : (
				<div className="menuItem">
					<Link to="/register">Register</Link>
					<br />
					<Link to="/login">Log in</Link>
				</div>
			)}
		</div>
	);
};
