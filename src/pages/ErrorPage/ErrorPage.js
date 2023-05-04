import { Header, Footer } from "../../layouts";
import { error404SVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import "./errorPageStyle.scss";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="errorPage">
        <img className="errorPage__image" aria-label="storyset.com/illustration" src={error404SVG} alt="404SVG" />
        <div className="errorPage__actions">
          <button
           className="errorPage__actions--btn"
           onClick={() => navigate("/")}
           >Go Home</button>
          <button
           className="errorPage__actions--btn"
           onClick={() => navigate(-1)}
           >Previous Page</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
