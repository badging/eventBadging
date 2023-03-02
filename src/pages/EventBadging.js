import { Header, Footer } from "../layouts";
import Roadmap from "../components/roadmap/Roadmap";
import TabsToggle from "../components/tabsToggle/TabsToggle"
import "../assets/styles/event-badging.css";
import heroBg from "../assets/images/event-badging/bg/event-badging-hero-bg.png";

const EventBadging = () => {
    return (
        <>
            <Header />
            <section className="event-badging-hero-section" 
                style={{
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
            </section>

            <Roadmap />
            
            <section className="before-apply">
                <h2>Before you apply</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra elementum, morbi metus et, 
                    fusce molestie. Etiam placerat varius tristique nulla urna amet. 
                    Dignissim amet auctor eget dui orci. 
                </p>
                <TabsToggle />
            </section>
            <Footer />
        </>
    )
};

export default EventBadging;
