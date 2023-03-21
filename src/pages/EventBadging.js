import { useState, useEffect } from 'react';
import { Header, Footer } from "../layouts";
import { EventBadgingHeroSection } from "../components/EventBadgingSections";
import { RoadmapSection, Roadmap } from "../components/RoadmapComponents";
import { TabSwitcherSection, TabSwitcher } from '../components/TabSwitcherComponents';

import roadmapData from '../components/RoadmapComponents/roadmap-data.json';
import beforeYouApplyInfo from '../components/TabSwitcherComponents/before-you-apply.json';

const EventBadging = () => {
    return (
        <>
            <Header />
            <EventBadgingHeroSection />
            <RoadmapSection>
                <h2>Badging Roadmap</h2>
                <Roadmap roadmapData={roadmapData}/>
            </RoadmapSection> 
            <TabSwitcherSection>
                <h2>Before You Apply</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pharetra elementum, morbi metus et, fusce molestie. Etiam placerat varius 
                    tristique nulla urna amet. Dignissim amet auctor eget dui orci. 
                </p>
                <TabSwitcher tabs={beforeYouApplyInfo}/>
            </TabSwitcherSection>


            <Footer />
        </>
    )
};

export default EventBadging;
