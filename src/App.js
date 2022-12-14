import { Header, Footer } from "./layouts";
import { Route, Routes } from "react-router-dom";
import { Home, About, EventBadging, ApplyForBadging, ErrorPage } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyForBadging />} />
        <Route path="/event" element={<EventBadging />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
