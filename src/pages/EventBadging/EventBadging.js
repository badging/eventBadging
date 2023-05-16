import { SubmitEvent } from "../../components";
import { Header, Footer } from "../../layouts";

const EventBadging = () => {
  return (
    <>
      <Header pathName="Event Badging" />
      <h1>Apply For Badge</h1>
      <SubmitEvent />
      <Footer />
    </>
  );
};

export default EventBadging;
