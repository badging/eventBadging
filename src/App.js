import { Header, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, About, Event, Apply, ErrorPage } from "./views";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
