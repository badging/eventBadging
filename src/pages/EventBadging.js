import { useState, useEffect } from 'react';
import { Header, Footer } from "../layouts";
import { EventBadgingHeroSection } from "../components/EventBadgingSections";
import { RoadmapSection, Roadmap } from "../components/RoadmapComponents";
import { TabSwitcherSection, TabSwitcher } from '../components/TabSwitcherComponents';

import roadmapData from '../components/RoadmapComponents/roadmap-data.json';
import beforeYouApplyInfo from '../components/TabSwitcherComponents/before-you-apply.json';
import howApplicationsAreReviewedInfo from '../components/TabSwitcherComponents/how-applications-are-reviewed.json';

const EventBadging = () => {
    return (
        <>
            <Header />
            <EventBadgingHeroSection />
            <RoadmapSection>
                <h2>Badging Roadmap</h2>
                <Roadmap roadmapData={roadmapData}/>
            </RoadmapSection> 

            <TabSwitcherSection key="before-you-apply">
                <h2>Before You Apply</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pharetra elementum, morbi metus et, fusce molestie. Etiam placerat varius 
                    tristique nulla urna amet. Dignissim amet auctor eget dui orci. 
                </p>
                <TabSwitcher tabs={beforeYouApplyInfo}/>
            </TabSwitcherSection>

            <TabSwitcherSection key="how-applications-are-reviewed">
                <h2>How applications are reviewed</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pharetra elementum, morbi metus et, fusce molestie. Etiam placerat varius 
                    tristique nulla urna amet. Dignissim amet auctor eget dui orci. 
                </p>
                <TabSwitcher tabs={howApplicationsAreReviewedInfo}/>
            </TabSwitcherSection>
            <Footer />
        </>
    )
};

export default EventBadging;
