import { Header, Footer } from "../layouts";
import Roadmap from "../components/roadmap/Roadmap";
import "../assets/styles/event-badging.css";
import heroBg from "../assets/images/event-badging/bg/event-badging-hero-bg.png";

const EventBadging = () => {
    return (
        <>
            <Header />
            <div className="event-badging-hero-section" style={{
                backgroundImage: `url(${heroBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:  "cover",
                backgroundPosition: "center center"
            }}>
                <h1>Event Badging</h1>
                <p>
                    D&I Badging program aims to increase understanding of the 
                    open-source project and event practices that encourage 
                    greater diversity and wi
                </p>
                <div className="button-container">
                    <button className="in-person-button">
                        In-person Event
                    </button>
                    <button className="virtual-button">
                        Virtual Event
                    </button>
                </div>
            </div>
            <Roadmap />
            
            <Footer />
        </>
    )
};

export default EventBadging;
