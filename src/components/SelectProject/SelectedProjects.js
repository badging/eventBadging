import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { DataContext } from "../../contexts/DataContext";
// import useLoadingError from "../../hooks/useLoadingError";

const SelectedProjects = () => {
  const { userData, setUserData } = useContext(DataContext);
  const filteredReposToBadge = [...new Set(userData.reposToBadge)];

  // const { loading, error } = useLoadingError();

  const handleClearInput = (event, result) => {
    event.stopPropagation();
    const repos = userData.reposToBadge.filter((repo) => repo !== result);

    setUserData({
      ...userData,
      reposToBadge: repos,
    });
  };

  return (
    <ul>
      {/* {loading && <li className="loading">Loading...</li>}
			{error && <li className="error">{error}</li>}
			{!loading && !error && results.length === 0 && (
				<li className="info">Repository not found</li>
			)} */}
      {
        // !loading &&
        // 	!error &&

        filteredReposToBadge.map((result, index) => (
          <li key={index} className="result">
            {result}
            <button
              type="button"
              className="clear btn"
              onClick={(event) => handleClearInput(event, result)}
            >
              <CloseIcon />
            </button>
          </li>
        ))
      }
    </ul>
  );
};

export default SelectedProjects;
