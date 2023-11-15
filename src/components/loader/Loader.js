import "../../assets/styles/global.scss";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Spinner from "./Spinner";

const Loader = ({ open, bgColor, children }) => {
	return (
		<Backdrop
			sx={{
				backgroundColor: bgColor || "#020202",
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
			open={open}
		>
			<div className="loader">
				<Spinner />
				{children}
			</div>
		</Backdrop>
	);
};

Loader.propTypes = {
	open: PropTypes.bool.isRequired,
  bgColor: PropTypes.string,
	children: PropTypes.node,
};

export default Loader;
