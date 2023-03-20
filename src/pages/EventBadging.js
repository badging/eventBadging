import { useState, useEffect } from 'react';
import { Header, Footer } from "../layouts";
import EventBadgingHeroSection from "../components/EventBadgingHeroSection";
import RoadmapSection from '../components/RoadmapSection';
import Roadmap from '../components/Roadmap';
import roadmapData from '../components/Roadmap/roadmap-data.json';

const EventBadging = () => {
    return (
        <>
            <Header />
            <EventBadgingHeroSection />
            <RoadmapSection>
                <h2>Badging Roadmap</h2>
                <Roadmap roadmapData={roadmapData}/>
            </RoadmapSection>               

            <Footer />
        </>
    )
};

export default EventBadging;
