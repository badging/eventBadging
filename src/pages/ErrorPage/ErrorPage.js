import { Footer } from "../../layouts";
import "../../assets/styles/footer.css";
// eslint-disable-next-line import/no-unresolved
import robotparts from "../../assets/images/Robot-Parts.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="footer">
      <div className="top">
        <h2>Oops! 404 Error</h2>
        <p>Please check your internet connection and try again.</p>

        <img src={robotparts} alt="robot" />

        <Link className="link" to={"/"}>
          <button>Go Back</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
