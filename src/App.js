import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  EventBadging,
  ApplyForBadge,
  ErrorPage,
  BadgedEvents,
  Landing
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/event-badging" element={<Home />} />
        <Route path="/apply" element={<ApplyForBadge />} />
        <Route path="/event" element={<EventBadging />} />
        <Route path="/about" element={<About />} />
        <Route path="/badged-events" element={<BadgedEvents />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
