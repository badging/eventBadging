import { useState } from 'react';
import RoadmapScreenshot from './RoadmapScreenshot';
import RoadmapItems from './RoadmapItems';
import './Roadmap.css';

export default function Roadmap({ roadmapData }){
    const [activeItem, setActiveItem] = useState({
        id: 1,
        status: 'active-item'
    });

    const onActive = (index) => {
        setActiveItem({ id: index, status: 'active-item' });
    };

    return (
        <div className="roadmap">
            <RoadmapScreenshot activeItemId={activeItem.id} />
            <RoadmapItems
                roadmapData={roadmapData}
                activeItem={activeItem}
                onActive={onActive}
            />
        </div>
    );
}
  
  