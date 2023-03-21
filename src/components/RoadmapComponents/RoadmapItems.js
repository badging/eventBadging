import RoadmapItem from './RoadmapItem';

export default function RoadmapItems({ roadmapData, activeItem, onActive }) {
    return (
        <div>
            {roadmapData.map((item, index) => (
                <RoadmapItem
                    item={item}
                    index={index}
                    activeItem={activeItem}
                    onActive={onActive}
                    key={index}
                />
            ))}
        </div>
    );
}
  
  