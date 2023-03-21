import { useState } from 'react';

import heroBg from './images/bg/event-badging-hero-bg.png';
import './EventBadgingHeroSection.css';

const EventBadgingHeroSection = () => {
    const [eventTypes, setEventTypes] = useState([
        { name: 'In-person Event', className: 'in-person-button' },
        { name: 'Virtual Event', className: 'virtual-button' }
      ]);
    
      return (
        <section className="event-badging-hero-section"
          style={{ backgroundImage: `url(${heroBg})` }}>
          <h1>Event Badging</h1>
          <p>
            D&amp;I Badging program aims to increase understanding of the 
            open-source project and event practices that encourage greater diversity and wi
          </p>
          <div className="button-container">
            {eventTypes.map((eventType, index) => (
              <button key={index} className={eventType.className}>
                {eventType.name}
              </button>
            ))}
          </div>
        </section>
      );
}

export default EventBadgingHeroSection;