import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		username: "",
		repos: [],
		reposToBadge: [],
	});

	/**
	 * KINDLY FOLLOW THESE STEPS TO TEST THIS PROGRAM ON YOUR LOCAL MACHINE
	 * Step 1: Login to your gihub via http://localhost:5050/badge
	 * Step 2: Grant this program access to repo(s)
	 * Step 3: Copy your github info and replace it with the empty useState() above as mine below
	 * Step 4: Then proceed to SearchBar.js and comment out the first useEffect()
	 * Step 5: Visit localhost:5050/select-project, select the project you want to badge and proceed.
	 * Now you are good go!!!
	 */

	// const [userData, setUserData] = useState({
	// 	email: "tochuks.chris@gmail.com",
	// 	name: "Tochukwu",
	// 	repos: [
	// 		"AllInOpenSource/ProjectBadging",
	// 		"animeshack/church-website",
	// 		"badging/badging",
	// 	],
	// 	username: "teek-tech",
	// 	reposToBadge: [],
	// });

	return (
		<DataContext.Provider value={{ userData, setUserData }}>
			{children}
		</DataContext.Provider>
	);
};

DataProvider.propTypes = {
	children: PropTypes.node,
};
