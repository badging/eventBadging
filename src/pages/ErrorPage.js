import { Footer } from "../layouts";
import "../assets/styles/footer.css";
import robotparts from "../assets/images/Robot-parts.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="footer">
      <div className="top">
        <h2>Oops! 404 Error</h2>
        <p>Please check your internet connection and try again.</p>

        <img src={robotparts} alt="robot" />

        <button>
          <Link className="link" to={"/"}>Go Back</Link>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
