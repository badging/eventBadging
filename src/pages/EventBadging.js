import { useState, useEffect } from 'react';
import { Header, Footer } from "../layouts";
import { EventBadgingHeroSection, DEIBadingTeamSection } from "../components/EventBadgingSections";
import { RoadmapSection, Roadmap } from "../components/RoadmapComponents";
import { TabSwitcherSection, TabSwitcher } from '../components/TabSwitcherComponents';
import { BadgeLevels, BadgeEvents } from '../components';

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

            <BadgeLevels />

            <TabSwitcherSection key="how-applications-are-reviewed">
                <h2>How applications are reviewed</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pharetra elementum, morbi metus et, fusce molestie. Etiam placerat varius 
                    tristique nulla urna amet. Dignissim amet auctor eget dui orci. 
                </p>
                <TabSwitcher tabs={howApplicationsAreReviewedInfo}/>
            </TabSwitcherSection>

            <DEIBadingTeamSection />

            <BadgeEvents />
            <Footer />
        </>
    )
};

export default EventBadging;
